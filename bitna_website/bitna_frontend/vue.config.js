const BundleTracker = require('webpack-bundle-tracker')

const DEPLOYMENT_PATH = '/static/dist/'

module.exports = {

    /* publicPath: '/static/src/vue/dist',
    outputDir: path.resolve(__dirname, '../static/src/vue/dist'),
    filenameHashing: false, 
    runtimeCompiler: true, */

    devServer: {
        host: '127.0.0.1', 
        hot: true, 
        disableHostCheck: true, 
        https: false,
        writeToDisk: true, 
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true, 
                changeOrigin: true
            }
        }
    }, 

    publicPath: '/'
    /* chainWebpack: (config) => {

        config.optimization.splitChunks(false)

        config
            .plugin("BundleTracker")
            .use(BundleTracker, [{ filename: "./webpack-stats.json"}])

            config.output.filename("bundle.js")

            config.optimization.splitChunks(false);

            config.resolve.alias.set("__STATIC__", "static")

            config.devServer
                .public("http://127.0.0.1:8000")
                .host("127.0.0.1")
                .port(8000)
                .hotOnly(true)
                .watchOptions({ poll: 1000 })
                .https(false)
                .disableHostCheck(false)
                .headers({ "Access-Control-Allow-Origin": ["*"]})
    } */
}