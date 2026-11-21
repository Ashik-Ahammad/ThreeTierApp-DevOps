const manifest = require("../package.json");
const materialUiCore = require("@material-ui/core/package.json");

function minorOf(version) {
  const cleaned = version.replace(/^[^\d]*/, "");
  return Number(cleaned.split(".")[1]);
}

describe("@material-ui/core dependency", () => {
  test("is declared on the supported 4.12.x release line", () => {
    expect(
      minorOf(manifest.dependencies["@material-ui/core"])
    ).toBeGreaterThanOrEqual(12);
  });

  test("resolves to an installed 4.12.x release", () => {
    expect(Number(materialUiCore.version.split(".")[0])).toBe(4);
    expect(minorOf(materialUiCore.version)).toBeGreaterThanOrEqual(12);
  });
});
