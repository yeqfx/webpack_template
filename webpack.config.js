const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // mode: "development",
    // name: "app",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    module: {
        rules: [
            // css file loader
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                // use: ["style-loader", "css-loader"],
            },
            // Sass file loader
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                // use: ["style-loader", "css-loader", "sass-loader"],
            },
            // Image file loader
            {
                test: /\.jpg$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            // filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 8080,
    },
};
