const mix = require('laravel-mix')

mix.autoload({
    jquery: ['jQuery', '$', 'window.jquery']
})

mix.extract()

mix.js('src/public/main.js', 'assets/js').vue({ version: 2 })

