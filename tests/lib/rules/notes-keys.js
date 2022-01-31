/*
 * @page: 
 * @Author: Orts
 * @Date: 2022-01-31 14:13:32
 * @LastEditTime: 2022-01-31 17:51:36
 * @LastEditors: Orts
 * @Description: 
 * @FilePath: /eslint-plugin-foo/tests/lib/rules/notes-keys.js
 */
/**
 * @fileoverview 校验注释中是否包含指定关键词
 * @author orts
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/notes-keys"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const errMsg = (msg) => `注释中含有不被允许的字符${msg}`;
ruleTester.run("notes-keys", rule, {
  valid: ['// sssss', '// attr'], //生效的， 失效的

  invalid: [
    {
      code: `// xxx:测试内容`,
      errors: [{ message: errMsg('xxx') }],
      options: [{ // 通过options 配置自定义参数
        keyWords: ['xxx']
      }],
      // 添加fix修复必须添加output，output输出的内容要和rule中fix返回的结果一致
      output: `// :测试内容`,
    },
    {
      code: `// str11: const s='测试内容'`,
      errors: [{ message: errMsg('str') }],
      options: [{ // 通过options 配置自定义参数
        keyWords: ['str']
      }],
      // 添加fix修复必须添加output，output输出的内容要和rule中fix返回的结果一致
      output: `// 11: const s='测试内容'`,
    }
  ],
});
