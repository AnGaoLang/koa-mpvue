// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 0: 通过, 1: 警告, 2: 错误
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 是否加分号
    'semi': 0,
    //不能用多余的空格
    'no-multi-spaces': 0,
    //不能有不规则的空格
    'no-irregular-whitespace': 0,
    //一行结束后面不要有空格
    'no-trailing-spaces': 0,
    //关键字后面是否要空一格
    'keyword-spacing': [
      0,
      {
        before: false,
        after: false
      }
    ],
    //不能有无法执行的代码
    'no-unreachable': 1,
    //禁用var，用let和const代替
    'no-var': 1,
    //禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 1,
    //函数参数不能重复
    'no-dupe-args': 1,
    //禁止隐式转换
    'no-implicit-coercion': 0,
    // 禁止不必要的布尔值转换
    'no-extra-boolean-cast': 0,
    // 不允许功能标识符与其应用程序之间的间距。fn()
    'no-spaced-func': 1,
    //禁止多余的冒号
    'no-extra-semi': 0,
    // 函数声明前的空格
    'space-before-function-paren': 0,
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
}
