/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-line-awesome',
  included() {
  	this.import('vendor/line-awesome.min.css');

  	this.import('vendor/line-awesome.eot', {
  		destDir: 'fonts'
  	});
    this.import('vendor/line-awesome.svg', {
    	destDir: 'fonts'
    });
    this.import('vendor/line-awesome.ttf', {
    	destDir: 'fonts'
    });
    this.import('vendor/line-awesome.woff', {
    	destDir: 'fonts'
    });
   	this.import('vendor/line-awesome.woff2', {
   		destDir: 'fonts'
   	});
  	
  },
  treeForVendor(vendorTree) {

  	let cssFolder = path.dirname(require.resolve('line-awesome/dist/css/line-awesome.min.css'));

  	var lineAwesomeTree = new Funnel(cssFolder, {
      files: ['line-awesome.min.css']
    });

	let fontsFolder = path.dirname(require.resolve('line-awesome/dist/fonts/line-awesome.eot'));

    var fontsTree = new Funnel(fontsFolder, {
    	files: [
    		'line-awesome.eot',
    		'line-awesome.svg',
    		'line-awesome.ttf',
    		'line-awesome.woff',
    		'line-awesome.woff2'
    	]
    });

    return new MergeTrees([vendorTree, lineAwesomeTree, fontsTree].filter(Boolean));
  }
};
