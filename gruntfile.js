module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            src: [
                'main/**/*.js',
                'main/**/*.js.map',
            ],
            build: [
                'build'
            ],
            doc: [
                'docs'
            ],
            coverage: [
                'coverage/**/*'
            ],
            tscache: [
                '.tscache'
            ]
        },
        mocha_istanbul: {
            src: {
                src: 'build',
                options: {
                    mask: '**/*.spec.js'
                }
            }
        },
        remapIstanbul: {
            build: {
                src: 'coverage/coverage.json',
                options: {
                    reports: {
                        'html': 'coverage/html-report',
                        'json': 'coverage/coverage.json'
                    }
                }
            }
        },
        ts: {
            options: {
                fast: 'always'
            },
            default: {
                tsconfig: true
            }
        },
        coveralls: {
            src: 'coverage/lcov.info'
        },
        typedoc: {
            build: {
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    out: 'docs/',
                    name: 'MasterPiece',
                    theme : 'markdown',
                    mdFlavour: 'github',
                    mdSourceRepo: 'https://github.com/smarletta/masterpiece'
                },
                src: 'main/src/**/*.ts'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('remap-istanbul');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-typedoc');

    grunt.registerTask('compile', [
        'ts',
        'mocha_istanbul'
    ]);

    grunt.registerTask('build', [
        'clean',
        'compile',
        'remapIstanbul'
    ]);

    grunt.registerTask('travis', [
        'build',
        'coveralls'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};