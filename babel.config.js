module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "@src": "./src",
          '@commands': './src/commands',
          '@config': './src/config',
          '@screens': './src/screens',
          '@components': './src/components',
          '@models': './src/models',
          '@services': './src/services',
          '@hooks': './src/hooks',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
