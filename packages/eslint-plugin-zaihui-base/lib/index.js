/**
 * @fileoverview zaihui base eslint rules
 * @author jkzing
 */

module.exports = {
  extends: [
    './best-practices',
    './errors',
    './node',
    './style',
    './variables',
    './es6',
    './imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
}



