"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const htmlFiles = [
  "index.html", "calculadora-npt.html", "calculadoras-infusion.html",
  "neo-clinical.html", "centro-cientifico.html", "boletin-neonatal-01.html",
  "resumenes/flujo-mesenterico-alimentacion-prematuros.html",
  "resumenes/procedimientos-limite-viabilidad.html",
  "resumenes/sepsis-monitorizacion-pows.html",
  "resumenes/ventilacion-no-invasiva-prematuros.html"
];

test("all inline JavaScript blocks parse without syntax errors", () => {
  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
    const blocks = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const [index, block] of blocks.entries()) {
      if (!block[1].trim()) continue;
      assert.doesNotThrow(() => new vm.Script(block[1], { filename: file + "#script-" + index }));
    }
  }
});

test("all HTML pages declare the baseline CSP", () => {
  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
    assert.match(html, /http-equiv="Content-Security-Policy"/, file);
  }
});

test("NeoClinical remains unavailable until its clinical tables are validated", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "neo-clinical.html"), "utf8");
  assert.match(html, /Calculadora temporalmente no disponible/);
  assert.doesNotMatch(html, /const PHOTO\s*=|function getThresholds\s*\(/);
});

test("calculator pages load the shared validation module", () => {
  for (const file of ["calculadora-npt.html", "calculadoras-infusion.html"]) {
    const html = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
    assert.match(html, /assets\/js\/validation\.js/);
    assert.match(html, /NeoCareValidation/);
  }
});

test("catalogue validates application URLs before rendering links", () => {
  const script = fs.readFileSync(path.join(__dirname, "..", "script.js"), "utf8");
  assert.match(script, /function safeAppUrl\(/);
  assert.match(script, /url\.origin === window\.location\.origin/);
});
