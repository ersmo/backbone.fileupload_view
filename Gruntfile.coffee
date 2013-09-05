path = require 'path'

module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    concat:
      dist:
        src: [
          'lib/template.js'
          'lib/download.js'
          'lib/upload.js'
          'lib/<%= pkg.name %>.js'
        ]
        dest: 'dist/<%= pkg.name %>.js'

    uglify:
      dist:
        src: '<%= concat.dist.dest %>'
        dest: 'dist/<%= pkg.name %>.min.js'

    coffee:
      compile:
        files:
          'lib/<%= pkg.name %>.js': 'src/<%= pkg.name %>.coffee'

    jade:
      compile:
        options:
          client: true
          compileDebug: false
          processName: (filename) ->
            'blueimp_file_upload_' + path.basename filename, '.jade'
        files:
          'lib/template.js': 'src/template.jade'
          'lib/download.js': 'src/download.jade'
          'lib/upload.js': 'src/upload.jade'

    watch:
      scripts:
        files: ['src/*.coffee', 'src/*.jade', 'Gruntfile.coffee']
        tasks: ['coffee', 'jade', 'concat', 'uglify']

    clean: [
      'lib'
      'dist'
    ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-jade'

  grunt.registerTask 'build', [
    'clean'
    'coffee'
    'jade'
    'concat'
    'uglify'
  ]

  grunt.registerTask 'default', [
    'watch'
  ]
