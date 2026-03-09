const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("mjs");
config.resolver.unstable_enablePackageExports = true;
// Prioritize main to avoid ESM/CJS resolution issues on Windows for some packages
config.resolver.resolverMainFields = ["main", "browser", "module"];

module.exports = withNativeWind(config, { input: "./global.css" });
