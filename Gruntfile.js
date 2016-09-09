module.exports = function(grunt) {
    grunt.initConfig({
		sass: {
            compile: {
                files: {
                    'assets/css/main.backup.css': 'assets/sass/main.sass'
                }
            },
            options: {
                sourceMap: true
            }
        },
        cssmin: {
		  combine: {
		    files: {
		      'assets/css/main.css': ['assets/css/main.backup.css']
		    }
		  }
		},
		uglify: {
            öy_target: {
              files: {
				'assets/js/script.js': ['assets/js/script.backup.js']
              }
            }
        },
        watch: {
          src: {
            files: ['assets/sass/**/*.sass','assets/css/main.css','assets/js/script.backup.js'], 
            tasks: ['default'],
		  }
        },
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass','cssmin','uglify']);
}