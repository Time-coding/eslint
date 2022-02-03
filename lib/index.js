/*
 * @page: 
 * @Author: Orts
 * @Date: 2022-01-31 14:10:07
 * @LastEditTime: 2022-02-03 10:36:23
 * @LastEditors: Orts
 * @Description: 
 * @FilePath: /eslint-plugin-foo/lib/index.js
 */
/**
 * @fileoverview orts定制的foo实例
 * @author orts
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");
