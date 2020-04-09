const path = require('path')
var vConsolePlugin = require('vconsole-webpack-plugin')

module.exports = {
  'publicPath': '/', // 公共路径
  // 'outputDir': process.env.VUE_APP_OUTPUTDIR, // 不同的环境打不同包名
  'lintOnSave': false, // 关闭eslint

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录默认：''
  'assetsDir': 'assets',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)默认：'index.html'
  'indexPath': 'index.html',

  //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存,默认true true==>app.e2713bb0.css false==>app.css
  'filenameHashing': true,

  // 是否生成.map文件 .map文件作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
  // 默认：true 开发环境设置为false加速开发 发布环境设置为true
  'productionSourceMap': false,

  'devServer': {
    // 配置服务器
    'port': 7788,
    'open': true,
    'https': false,
    'overlay': {
      'warnings': true,
      'errors': true
    }},
  configureWebpack: config => {
    let myConfigs = {
      'resolve': {
        // 配置解析别名
        'alias': {
          '@': path.resolve(__dirname, './src'),
          '@views': path.resolve(__dirname, './src/views')
        }
      }
    }

    if (process.env.NODE_ENV === 'production'){
      // 专门用于生产环境的配置
    }else{
      // 专门用于开发环境的配置
      myConfigs.plugins = [
        new vConsolePlugin({
          enable: true
        })
      ]
    }
    return myConfigs
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 750,
            viewportHeight: 1624,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: ['.ignore-', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 1334
          })
        ]
      }
    }
  }
}