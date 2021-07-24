module.exports = {
  title: '阿康的个人博客', // 网站header
  description: 'Just Do It!!!',
  base: '/mysite', // 站点的非根目录 名称
  configurewebpack: {
    resolve: {
      alias: { // alias 别名
        '@access': '/access/image'
      }
    }
  }
}