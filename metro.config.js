/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // resolver: {
  //   extraNodeModules: {
  //     // '@Screens': path.resolve(__dirname, 'src/Screens'),
  //   },
  //   // This line is important! It tells Metro to look for files inside the
  //   // extraNodeModules as well
  //   sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
  // },
};
