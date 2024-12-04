const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { progressive: true, quality: 65 },
                            optipng: { enabled: false },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false },
                            webp: { quality: 75 },
                        },
                    },
                ],
            },
        ],
    },
};
