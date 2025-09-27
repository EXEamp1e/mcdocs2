const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = ({ env }) => {
  const plugins = [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-mod-function': true,
        'gap-properties': false
      }
    }),
    autoprefixer({
      overrideBrowserslist: ['> 1%', 'last 2 versions']
    })
  ];

  if (env === 'production') {
    plugins.push(
      cssnano({
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true
        }]
      })
    );
  }

  return { plugins };
};