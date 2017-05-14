const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: ["./app/index.ts"],
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    /node_modules/,
                ],
                use: [
                    {
                        loader: "ts-loader",
                    }
                ]
            }
        ]
    }
};