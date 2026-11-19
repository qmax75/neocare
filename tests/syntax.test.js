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
