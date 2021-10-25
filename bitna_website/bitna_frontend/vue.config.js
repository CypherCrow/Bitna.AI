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
    }
    /*
    publicPath: process.env.NODE_ENV === 'production' ? DEPLOYMENT_PATH : 'http://localhost:8000', 
    outputDir: '../bitna_website/static/dist',

    devServer: {
        public: 'localhost:8000', 
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }, 

    configureWebpack: {
        plugins: [
            new BundleTracker({ path: __dirname, filename: 'webpack-stats.json' })
        ]
    }*/
}