const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {

    const CSSExtract = new ExtractTextPlugin('styles.css');
    const isProduction = env === 'production';

    return{  
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname, 'Public', 'dist'),
        filename:'bundle.js'
    },

    "module": {
        "rules":[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
                use: [
                    {
                    loader: 'css-loader',
                    options: {sourceMap : true}
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true}
                    }
                ]
            })
        }
    ]
    },
    plugins: [
        CSSExtract
      ],
    devtool: isProduction ? 'source-map' :'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'Public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    }
};
};