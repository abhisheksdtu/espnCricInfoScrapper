let request = require('request');
let createSeriesFolder = require('./createSeriesFolder');

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595';

request(url, cb);

function cb(error, response, html) {
	if (error) {
		console.log(error);
	} else {
		// console.log(extractHtml);
		createSeriesFolder.createSeriesFolderFn(html);
	}
}
