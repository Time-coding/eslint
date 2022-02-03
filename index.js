/*
 * @page: 
 * @Author: Orts
 * @Date: 2022-01-31 20:19:41
 * @LastEditTime: 2022-02-03 10:35:25
 * @LastEditors: Orts
 * @Description: 
 * @FilePath: /eslint-plugin-foo/index.js
 */

module.exports = {
  rules: require('./lib/index.js').rules,
  configs: {
    recommended: {
      plugins: ['foo'],
      rules: {
        'foo/notes-keys': [2, { keyWords: ['foo', 'xxx'] }],
      },
    },
    all: {
      plugins: ['foo'],
      rules: {
        'foo/notes-keys': [1, { keyWords: ['foo', 'xxx'] }],
      },
    }
  },
};