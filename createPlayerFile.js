let request = require('request');
let cheerio = require('cheerio');
let createJSONFile = require('./createJSONFile');

function createPlayerFile(path, teamLink) {
	request(teamLink, function cb(error, response, html) {
		if (error) {
			console.log(error);
		} else {
			// console.log(path + '--->' + teamLink);

			let selectorTool = cheerio.load(html);

			let playerTextArr = selectorTool(
				'.large-13.medium-13.small-13.columns a'
			);

			let playerNameArr = [];
			let playerLinkArr = [];

			for (let i = 0; i < playerTextArr.length; i++) {
				let playerName = selectorTool(playerTextArr[i]).text();

				playerNameArr.push(playerName.trim());

				let playerLink = selectorTool(playerTextArr[i]).attr('href');

				// console.log(playerLink);

				playerLinkArr.push('https://www.espncricinfo.com' + playerLink);

				// console.log(playerName + '-->' + playerLink);
			}

			// console.log(playerNameArr);
			// console.log(playerLinkArr);

			for (let i = 0; i < playerLinkArr.length; i++) {
				// console.log(playerNameArr[i] + '-->' + playerLinkArr[i]);

				// console.log(playerNameArr[i].replace(' ', ''));
				// console.log(path);

				let playerFileName =
					path + '/' + playerNameArr[i].replace(' ', '') + '.json';

				// console.log(playerFileName);

				createJSONFile.createJSONFileFn(playerFileName)

				// createJSONFile.createJSONFileFn(
				// 	path,
				// 	playerNameArr[i].replace(' ', '')
				// );
			}

			// console.log('`````````````````');
		}
	});
}

module.exports = {
	createPlayerFileFn: createPlayerFile,
};
