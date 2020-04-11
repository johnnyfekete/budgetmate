/* global require */
const mix = require("laravel-mix");

const productionSourceMaps = false;

mix.react("resources/js/app.js", "public/js").sourceMaps(
    productionSourceMaps,
    "source-map"
);

mix.postCss("resources/css/app.css", "public/css", [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.js"),
    require("postcss-hexrgba"),
    require("postcss-nested"),
    require("autoprefixer")
])
    .copyDirectory("resources/img", "public/images");
