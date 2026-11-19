(function (root) {
  "use strict";
  function parseFinite(value) {
    if (typeof value !== "string" && typeof value !== "number") return null;
    if (String(value).trim() === "") return null;
    var number = Number(value);
    return Number.isFinite(number) ? number : null;
  }
  function positive(value) {
    var number = parseFinite(value);
    return number !== null && number > 0;
  }
  function nonNegative(value) {
    var number = parseFinite(value);
    return number !== null && number >= 0;
  }
  function volumeBalance(finalVolume, componentVolumes) {
    var total = parseFinite(finalVolume);
    if (total === null || total <= 0 || !Array.isArray(componentVolumes)) return false;
    var components = componentVolumes.map(parseFinite);
    if (components.some(function (value) { return value === null || value < 0; })) return false;
    return components.reduce(function (sum, value) { return sum + value; }, 0) < total;
  }
  var api = Object.freeze({ parseFinite: parseFinite, positive: positive, nonNegative: nonNegative, volumeBalance: volumeBalance });
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.NeoCareValidation = api;
})(typeof window !== "undefined" ? window : globalThis);
