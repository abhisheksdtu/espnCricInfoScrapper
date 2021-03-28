let fs = require('fs');

function createJSONFile(fileName) {
	// let fileName = path + '.json';

	fs.writeFile(fileName, '', function cb(err) {
		if (err) throw err;
		// console.log('Saved!');
	});
}

module.exports = {
	createJSONFileFn: createJSONFile,
};
