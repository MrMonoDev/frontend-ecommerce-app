const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { 
            '@primary-color': '#1d39c4',
            '@processing-color': '#85a5ff',
            '@heading-color': '#595959',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};