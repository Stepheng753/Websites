let testFile;
fetch('./ProjectsToDisplay.json')
	.then((response) => {
		return response.json();
	})
	.then((file) => {
		printFile(file.Projects[0].Directory + file.Projects[0].Files[1]);
	});

function printFile(file) {
	fetch(file)
		.then((response) => {
			return response.text();
		})
		.then((text) => (testFile = text));
}

function convertHtmlToString(html) {
	html = html.replace('</body>', '\n</body>');
	html = html.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('\n', '<br>');
	let i = 0;
	while (i < html.length) {
		let newlineIndex = html.indexOf('<br>', i);
		if (newlineIndex == -1) {
			break;
		}
		let line = i == 0 ? html.substring(0, newlineIndex) : html.substring(i + 3, newlineIndex);
		if (line.length == 0) {
			i = html.indexOf('<br>', newlineIndex) + 1;
			continue;
		}

		let lineReplacement =
			line.substring(0, 2) == '\t\t'
				? '<div class="indent">' + line.substring(2, line.length) + '</div>'
				: '<div>' + line + '</div>';

		html = html.replace(line, lineReplacement);
		i = html.indexOf('<br>', i) + 1;
	}
	return html;
}
