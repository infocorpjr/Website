let mix = require('laravel-mix');

mix.js([
    'src/js/app.js'
], 'app.js');

mix.sass('src/styles/styles.scss', 'app.css');

mix.webpackConfig({
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "public"), // string
    }
});

// mix.disableNotifications();