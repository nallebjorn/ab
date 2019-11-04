const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../dist"),
    assets: "assets/"
};

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: ["babel-polyfill", PATHS.src]
        // app: "./src/index.js"
    },
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
        publicPath: "/"
    },
    resolve: {
        alias: {
            Root: PATHS.src,
            Assets: `${PATHS.src}/assets/`,
            Js: `${PATHS.src}/js/`,
            Components: `${PATHS.src}/js/components`,
            Redux: `${PATHS.src}/js/redux/`,
            Actions: `${PATHS.src}/js/redux/actions`,
            Utils: `${PATHS.src}/js/utils/`,
            Services: `${PATHS.src}/js/services/`,
            Pages: `${PATHS.src}/js/components/pages/`,
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /(\.sass$|\.scss$)/,
                // test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: { path: `./postcss.config.js` }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                path: "./postcss.config.js"
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`
        }),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/${PATHS.assets}img`,
                to: `${PATHS.assets}img`
            },
            {
                from: `${PATHS.src}/${PATHS.assets}fonts`,
                to: `${PATHS.assets}fonts`
            },
            { from: `${PATHS.src}/static`, to: "" }
        ]),
        new HtmlWebpackPlugin({
            template: `${PATHS.src}/index.html`,
            filename: "./index.html"
            // inject: false
        })
    ]
};
