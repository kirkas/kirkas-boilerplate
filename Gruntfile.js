module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ref: {
      src: "src",
      dist: "dist",
      tmp: ".tmp"
    },

    /* Cleaning task */
    clean: {
      dist: {
        src: ["<%= ref.dist %>/*"]
      }
    },
    
    /* SASS/CSS Related task */
    sass: {
      homepage: {
        files: {
          '<%= ref.src %>/styles/main.css': '<%= ref.src %>/styles/build/rem.scss',
          '<%= ref.src %>/styles/main-no-rem.css': '<%= ref.src %>/styles/build/no-rem.scss'
        }
      }
    },
    
    cssmin: {
        main: {
            src: '<%= ref.src %>/styles/main.css',
            dest: '<%= ref.dist %>/styles/main.css'
        },
        main_no_rem: {
            src: '<%= ref.src %>/styles/main-no-rem.css',
            dest: '<%= ref.dist %>/styles/main-no-rem.css'
        }
    },
    
    /* Javascript Related task */
    requirejs: {
      compile: {
        options: {
          name:"main",
          baseUrl: "<%= ref.src %>/scripts",
          mainConfigFile: "<%= ref.src %>/scripts/main.js",
          out: "<%= ref.dist %>/scripts/main.js"
        }
      }
    },
    
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
    
      scripts: {
        src: '<%= ref.src %>/scripts/*.js'
      }
    },
    
    uglify: {
      requirejs: {
        src: '<%= ref.src %>/components/requirejs/require.js',
        dest: '<%= ref.dist %>/components/requirejs/require.js'
      },
      modernizr: {
        src: '<%= ref.src %>/scripts/lib/modernizr.js',
        dest: '<%= ref.dist %>/scripts/lib/modernizr.js'
      },
      main: {
        src: '<%= ref.dist %>/scripts/main.js',
        dest: '<%= ref.dist %>/scripts/main.js'
      }
    },

    watch: {
      options: {
        livereload: 9001
      },
      grunt: { 
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      },
      main: {
        files: ['<%= ref.src %>/scripts/**/*.js'],
        tasks: ['jshint:scripts']
      },
      css: {
        files: '<%= ref.src %>/styles/main.css'
      },
      html: {
        files: '<%= ref.src %>/*.html'
      },
      template: {
        files: ['<%= ref.src %>/**/*.ejs'],
        tasks: ['template']
      },
      scss: {
        options: {
          livereload: false
        },
        files: ['<%= ref.src %>/styles/**/*.scss', '<%= ref.tmp %>/*.scss'],
        tasks: ['sass']
      }
    },
    
    prettify: {
      options: {
        prettifyrc: '.prettifyrc'
      },
      all: {
        expand: true,
        cwd: '<%= ref.src %>/',
        ext: '.html',
        src: ['*.html'],
        dest: '<%= ref.dist %>/'
      }
    },
    
    connect: {
      dev: {
        options: {
          port: 8888,
          base: '<%= ref.src %>',
          livereload: 9001
        }
      },
      prod: {
        options: {
          port: 8888,
          base: '<%= ref.dist %>',
          livereload: false
        }
      }
    },
    
    copy: {
      main: {
        src: '<%= ref.src %>/.htaccess',
        dest: '<%= ref.dist %>/.htaccess'
      }
    },
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= ref.src %>/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= ref.dist %>/img'
        }]
      }
    },
    
    template: {
      html: {
        src: "<%= ref.src %>/index.html.ejs",
        dest: "<%= ref.src %>/index.html",
        variables: {
          pageTitle: 'Home page',
          bodyClass: 'home'
        }
      },
      demo: {
        src: "<%= ref.src %>/demo.html.ejs",
        dest: "<%= ref.src %>/demo.html",
        variables: {
          pageTitle: 'Demo page',
          bodyClass: 'demo'
        }
      }
    },
    
    modernizr: {
      devFile : "<%= ref.src %>/components/modernizr/modernizr.js",
      outputFile : "<%= ref.src %>/scripts/lib/modernizr.js",
      uglify: false,
      files: ["<%= ref.src %>/scripts/**/*.js", "<%= ref.src %>/styles/**/*.scss", "<%= ref.src %>/**/*.ejs"]
    }
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-templater');
  grunt.loadNpmTasks("grunt-modernizr");
  grunt.loadNpmTasks('grunt-prettify');
  
  /* Build */
  grunt.registerTask('build', ['clean', 'sass', 'cssmin', 'modernizr','requirejs', 'uglify', 'prettify', 'copy']);
  
  /* server */
  grunt.registerTask("server", function(env) {
    var serverEnv = env || "dev";
    if(serverEnv == "prod") {
      grunt.task.run(['build']);
    }
    grunt.task.run(['connect:'+serverEnv, 'watch']);
  });

};

 