module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/codethestudent'
    : '/',
  outputDir: 'dist',
  transpileDependencies: [
    'vuetify'
  ]
}
