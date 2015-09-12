/**
 * this is a toolbox for text related operations 
 */

/*
 * filePath in format like: "D:\Docs\Desktop\csvfile.csv"
 * source: http://stackoverflow.com/questions/23762822/javascript-loading-csv-file-into-an-array
 * */
function handleFile(filePath) 
{

	$(document).ready(function () {
		$.ajax({
			type: "GET",
			url: filePath,
			dataType: "csv",
			success: function (data) { processData(data); }
		});
	});
}

/*
 * source: http://stackoverflow.com/questions/23762822/javascript-loading-csv-file-into-an-array
 * */
function processData(allText) {
	var allTextLines = allText.split(/\r\n|\n/);
	var headers = allTextLines[0].split(',');
	var lines = [];

	for (var i = 1; i < allTextLines.length; i++) {
		var data = allTextLines[i].split(',');
		if (data.length == headers.length) {
			
			var tarr = [];
			for (var j = 0; j < headers.length; j++) {
				tarr.push(headers[j] + ":" + data[j]);
			}
			lines.push(tarr);
		}
	}
	console.log(lines);
	drawOutput(lines);
}
