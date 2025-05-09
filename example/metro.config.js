const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');

const root = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const { withNativeWind } = require('nativewind/metro');

const config = getConfig(getDefaultConfig(__dirname), {
  root,
  project: __dirname,
});


module.exports = withNativeWind(config, { input: './global.css' })