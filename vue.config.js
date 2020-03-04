module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            //这里是配置项，详见官方文档
            rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  }
};
