/*
 * @page: 
 * @Author: Orts
 * @Date: 2022-01-31 14:10:07
 * @LastEditTime: 2022-01-31 22:21:19
 * @LastEditors: Orts
 * @Description: 
 * @FilePath: /eslint-plugin-foo/.eslintrc.js
 */
"use strict";

module.exports = {
  root: true,
  plugins: [
    "eslint-plugin"
  ],
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended"
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "eslint-plugin/consistent-output": 0,
    "eslint-plugin/require-meta-schema": 0,
    "eslint-plugin/require-meta-type": 0
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
