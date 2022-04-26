let innerCode = String(document.documentElement.getInnerHTML());

window.onload = function () {
	let code = document.getElementById('code');
	// code.innerHTML = convertHtmlToString(innerCode);
};

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

function findAllSubstring(str, subStr) {
	let i = 0;
	let j = 0;
	let result = [];
	while (i < str.length) {
		j = str.indexOf(subStr, i);
		if (j == -1) {
			break;
		}
		result.push(j);
		i = j + 1;
	}
	return result;
}
