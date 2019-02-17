/**
 * reference
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "tsx", "json", "js"],
  roots: ["<rootDir>/lib/"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transformIgnorePatterns: ["/node_modules/"],
};
