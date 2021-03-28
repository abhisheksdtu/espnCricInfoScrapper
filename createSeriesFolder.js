let cheerio = require('cheerio');
let createNewFolder = require('./createNewFolder');
let createTeamFolder = require('./createTeamFolder');

function createSeriesFolder(html) {
	let selectorTool = cheerio.load(html);

	let seriesName = selectorTool('.navbar-brand .header-title.label ');

	// console.log('before');

	// console.log(seriesName.length);

	let series = seriesName.text();

	// console.log(series);

	series = series.replace('/', '-');

	// console.log(series);

	createNewFolder.createNewFolderFn(series);

	let navItem = selectorTool('.jsx-850418440.nav-item .nav-link ');

	let squadUrl = selectorTool(navItem[5]).attr('href');
	// console.log(squadUrl);

	// SQUADS
	createTeamFolder.createTeamFolderFn(series, squadUrl);
}

module.exports = {
	createSeriesFolderFn: createSeriesFolder,
};
