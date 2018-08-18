var express = require('express');
var xlsxtojson = require("xlsx-to-json");

var app = express();

app.get('/', function (req, res) {
	callConverter();
	res.send('Excel is converted to json');
});

function callConverter() {
	xlsxtojson({
		input: "./excel-to-json.xlsx",  // input xls 
		output: "output.json", // output json 
		lowerCaseHeaders: true
	}, function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
}

app.listen(3000, () => {
	console.log('server started');
});