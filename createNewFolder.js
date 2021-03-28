const fs = require('fs');

function createNewFolder(name) {
	const folderName = name;

	try {
		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
		}
	} catch (err) {
		console.error(err);
	}
}

// createNewFolderFn('IPL 2020');

module.exports = { createNewFolderFn: createNewFolder };
