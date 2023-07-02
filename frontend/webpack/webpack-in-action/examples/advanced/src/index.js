import SpaHistory from 'spa-history'

new SpaHistory({
  onNavigate(location) {
    // 使用import()将加载的js文件分开打包, 这样实现了仅加载访问的页面
    import('./views' + location.path + '/index.js').then(module => {
      // export default ... 的内容通过module.default访问
      const View = module.default
      const view = new View()
      view.mount(document.body)
    })
  }
})
