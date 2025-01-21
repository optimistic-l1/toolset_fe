/* eslint-env node */

module.exports = {
  presets: [
    '@quasar/babel-preset-app'
  ],
  plugins: [
    // 添加支持数字分隔符的插件
    '@babel/plugin-proposal-numeric-separator'
  ]
  
}
