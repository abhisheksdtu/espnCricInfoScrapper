let request = require('request');
let cheerio = require('cheerio');
let createNewFolder = require('./createNewFolder');
let createPlayerFile = require('./createPlayerFile.js');

function createTeamFolder(series, squadUrl) {
	// console.log(squadUrl);
	request(squadUrl, cb);
	function cb(error, response, html) {
		if (error) {
			console.log(error);
		} else {
			let selectorTool = cheerio.load(html);

			let squads = selectorTool('.squads_list li span a');

			let teamNameArr = [];

			let teamLinkArr = [];

			for (let i = 0; i < squads.length; i++) {
				let teamNameText = selectorTool(squads[i]).text();

				let teamLink = selectorTool(squads[i]).attr('href');

				teamLinkArr.push('https://www.espncricinfo.com/' + teamLink);

				// console.log(teamNameText);

				if (i == 0) {
					let teamNameTextArr = teamNameText.split(' (');
					// console.log(teamNameTextArr);

					teamNameArr.push(teamNameTextArr[0]);
				} else {
					let teamNameTextArr = teamNameText.split(' Squad');
					// console.log(teamNameTextArr);
					teamNameArr.push(teamNameTextArr[0]);
				}
			}

			for (let i = 0; i < teamLinkArr.length; i++) {
				let path = series + '/' + teamNameArr[i];

				createNewFolder.createNewFolderFn(path);
				// console.log(path);

				createPlayerFile.createPlayerFileFn(path, teamLinkArr[i]);
			}
		}
	}
}

module.exports = {
	createTeamFolderFn: createTeamFolder,
};
