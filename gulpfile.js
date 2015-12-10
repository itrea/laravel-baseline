var elixir = require('laravel-elixir');
             require('laravel-elixir-jade');

elixir.config.sourcemaps = false;

 
elixir(function(mix) {
    mix.jade({
        baseDir: './resources',
        src: '/assets/jade/',
        search: '/**/*.jade',
        dest: '/views/',
        pretty: true,
        blade: true
    }); 

    mix.scripts([
      'bower/jquery/dist/jquery.min.js',
      'bower/baseline/assets/js/skel.min.js',
      'bower/baseline/assets/js/main.js',
    ], 'public/js/vendor.js', 'resources/assets');

    mix.copy('resources/assets/js/app.js', 'public/js/app.js');

    var directories = { 
      'resources/assets/bower/baseline/assets/sass/main.scss': 'resources/assets/sass/skel/main.scss',
      'resources/assets/bower/baseline/assets/sass/base': 'resources/assets/sass/skel/base',
      'resources/assets/bower/baseline/assets/sass/components': 'resources/assets/sass/skel/components',
      'resources/assets/bower/baseline/assets/sass/layout': 'resources/assets/sass/skel/layout',
      'resources/assets/bower/baseline/assets/sass/libs/_functions.scss': 'resources/assets/sass/skel/libs/_functions.scss',
      'resources/assets/bower/baseline/assets/sass/libs/_mixins.scss': 'resources/assets/sass/skel/libs/_mixins.scss',
      'resources/assets/bower/baseline/assets/sass/libs/_skel.scss': 'resources/assets/sass/skel/libs/_skel.scss',
      'resources/assets/bower/baseline/assets/css/font-awesome.min.css': 'public/css/font-awesome.min.css',
      'resources/assets/bower/baseline/assets/fonts': 'public/fonts',
    }   

    for (directory in directories) {
      mix.copy(directory, directories[directory]);
    }   

    // HACK TODO FIX THIS ISSUE
    // We dont copy the file 'resources/assets/bower/skel-baseline/assets/sass/libs/_vars.scss' to 'resources/assets/sass/skel/libs/_vars.scss'
    // Because we can not overwrite it by copying our own file to the same path. So we just have a file in the sass folder wich is a modified version
    // of the original _vars.scss file. In this file we set up all colors and units used by skel.
    mix.copy('resources/assets/sass/_vars.scss','resources/assets/sass/skel/libs/_vars.scss');
    // END HACK

    mix.sass('app.sass');
});
