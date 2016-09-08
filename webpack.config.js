module.exports = {
    entry: ['es6-promise', 'whatwg-fetch', './app/app.js'],
    output: {filename: './app.js'},
    devtool: 'source-map',
    watchOptions: {
        poll: 1000
    },
    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
};