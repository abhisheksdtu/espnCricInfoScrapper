let request = require('request');
let cheerio = require('cheerio');

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

			for (let i = 0; i < playerTextArr.length; i++) {
				let playerName = selectorTool(playerTextArr[i]).text();

                playerName.trim();

                console.log(playerName);

				let playerLink = selectorTool(playerTextArr[i]).attr('href');

				// console.log(playerName + '-->' + playerLink);
			}
		}
	});
}

module.exports = {
	createPlayerFileFn: createPlayerFile,
};
