angular.module("services.config", [])

.constant("package", {
	"name": "lg",
	"version": "0.0.0",
	"dependencies": {},
	"devDependencies": {
		"grunt": "^0.4.5",
		"grunt-ng-constant": "latest",
		"grunt-autoprefixer": "^0.7.3",
		"grunt-concurrent": "^0.5.0",
		"grunt-contrib-clean": "^0.5.0",
		"grunt-contrib-concat": "^0.4.0",
		"grunt-contrib-connect": "^0.7.1",
		"grunt-contrib-copy": "^0.5.0",
		"grunt-contrib-cssmin": "^0.9.0",
		"grunt-contrib-htmlmin": "^0.3.0",
		"grunt-contrib-imagemin": "^0.7.0",
		"grunt-contrib-jshint": "^0.10.0",
		"grunt-contrib-uglify": "^0.4.0",
		"grunt-contrib-watch": "^0.6.1",
		"grunt-filerev": "^0.2.1",
		"grunt-google-cdn": "^0.4.0",
		"grunt-karma": "^0.8.3",
		"grunt-newer": "^0.7.0",
		"grunt-ngmin": "^0.0.3",
		"grunt-svgmin": "^0.4.0",
		"grunt-usemin": "^2.1.1",
		"grunt-wiredep": "^1.7.0",
		"jshint-stylish": "^0.2.0",
		"karma": "^0.12.16",
		"karma-jasmine": "^0.1.5",
		"karma-phantomjs-launcher": "^0.1.4",
		"load-grunt-tasks": "^0.4.0",
		"time-grunt": "^0.3.1"
	},
	"engines": {
		"node": ">=0.10.0"
	},
	"scripts": {
		"test": "grunt test"
	}
})

.constant("env", {
	"API": "http://xxx/london_grammar/cc/"
})

.value("debug", true)

;