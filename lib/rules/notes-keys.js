/**
 * @fileoverview 校验注释中是否包含指定关键词
 * @author orts
 */
"use strict";

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "校验注释中是否包含指定关键词",
      category: "Stylistic Issues", // 规则分类
      recommended: true, // 配置文件中的 "extends": "eslint:recommended"属性是否启用该规则
      //在extends中设置  'plugin:foo/recommended', 是否启用此规则
      url: null, // URL to the documentation page for this rule
    },
     fixable: 'code', // Or `code` or `whitespace`
    // 如fixable主要用于fix功能，如果不设置fixable，eslint将默认此规则不可修复
    schema: [
      {
        "keyWords": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    ], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here
    // 返回一个SourceCode对象，你可以使用该对象处理传递给 ESLint 的源代码
    const sourceCode = context.getSourceCode();

    //  取得设置的keywords
    let [argv0] = context.options;
    let keyWords = argv0 ? argv0.keyWords ? argv0.keyWords.length > 0 ? argv0.keyWords : undefined : undefined : undefined;
    // 定义不被允许出现在注释中的内容
    let notAllowWords = keyWords || ['foo'];
    notAllowWords = notAllowWords.map(v => v.toLowerCase());

    return {
      Program(node) {
        // 获取所有注释的节点
        const comments = sourceCode.getAllComments();
        // 遍历注释节点判断是否有不符合规范的
        comments.forEach(comment => {
          let { value } = comment;
          value = value.toLowerCase();
          let warnWord = '';
          // 判断注释内容是否包含不被允许的word
          for (const word of notAllowWords) {
            if (value.includes(word)) {
              warnWord = word;
            }
          }

          if (warnWord) {
            context.report({
              node: node, // 可选 与问题有关的 AST 节点
              message: `注释中含有不被允许的字符${warnWord}`, // 有问题发出的消息
              fix: function (fixer) {
                // 修复的回调，用于修复规则
                // 因为注释节点，value中不包括，前面两个// ，所以需要加2
                // console.log(node.comments);
                let type = "Line";
                let range = [value.indexOf(warnWord) + 2, warnWord.length + 3];
                if (node.comments) {
                  type = node.comments[0].type
                }
                if (type === 'Block') {
                  return null;
                }
                return fixer.replaceTextRange(range, '');
              }
            })
          }
        })
      }
    };
  },
};