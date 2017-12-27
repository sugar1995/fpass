const execSync = require('child_process').execSync

module.exports = {
  srcDir: 'src/',
  loading: false,
  modules: [
    '~/modules/offline'
  ],
  plugins: [
    {src: '~/plugins/offline', ssr: false},
    {src: '~/plugins/fastclick', ssr: false},
    {src: '~/plugins/muse-ui'}
  ],
  build: {
    extractCSS: true,
    publicPath: '/'
  }
}
