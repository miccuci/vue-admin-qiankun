export default {
  baseUrl: 'http://192.168.37.172:42000',
  state: {
    test: 'aaa',
    msg: 'bbb'
  },
  devApps: [
    { name: 'bar-app', entry: '//localhost:5001', container: '#bar-app-container', activeRule: ['/microapp/bar-app', 'portal'] },
    { name: 'foo-app', entry: '//localhost:5002', container: '#foo-app-container', activeRule: ['/microapp/foo-app', 'portal', 'portal/about'] }
  ],
  prodApps: [
    { name: 'bar-app', entry: '/vue-cli-plugin-qiankun/bar-app/source.html', container: '#bar-app-container', activeRule: '/vue-cli-plugin-qiankun/bar-app' },
    { name: 'foo-app', entry: '/vue-cli-plugin-qiankun/foo-app/source.html', container: '#foo-app-container', activeRule: '/vue-cli-plugin-qiankun/foo-app' }
  ]
}
