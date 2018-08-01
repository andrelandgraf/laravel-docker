let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js(['config.js',
        'resources/assets/js/services/HttpService.js,',
        'resources/assets/js/services/PizzaService.js',
        'resources/assets/js/components/pizza.js'], 'public/js/pizza.js')
   .sass('resources/assets/sass/app.scss', 'public/css');
