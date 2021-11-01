const BundleTracker = require('webpack-bundle-tracker')

const DEPLOYMENT_PATH = '/static/dist/'

module.exports = {
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true, 
                changeOrigin: true
            }
        }
    },
    
    chainWebpack: (config) => {
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
                .disableHostCheck(true)
                .headers({ "Access-Control-Allow-Origin": ["*"]})
    }
}