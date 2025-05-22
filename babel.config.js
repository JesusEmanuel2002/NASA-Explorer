module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@application': './src/application',
            '@usecases': './src/application/usecases',
            '@interfaces': './src/application/interfaces',
            '@domain': './src/domain',
            '@models': './src/domain/models',
            '@infrastructure': './src/infrastructure',
            '@api': './src/infrastructure/api',
            '@repositories': './src/infrastructure/repositories',
            '@storage': './src/infrastructure/storage',
            '@navigation': './src/navigation',
            '@presentation': './src/presentation',
            '@screens': './src/presentation/screens',
            '@viewmodels': './src/presentation/viewmodels',
            '@services': './src/services',
            '@ui': './src/ui',
            '@components': './src/ui/components',
            '@contexts': './src/ui/contexts'
          }
        }
      ]
    ]
  };
};