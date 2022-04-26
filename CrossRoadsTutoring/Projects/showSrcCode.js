let code = document.getElementById('code');
let projectsJSON;

window.onload = function () {
	fetch('./projectsToDisplay.json')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			projectsJSON = json;
			getSrcCode(projectsJSON.CrossRoadsTutoringProjects.Files[''][0]);
		});
};

function getSrcCode(file) {
	fetch(file)
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			code.innerHTML = convertSrcCodeToString(text);
		});
}

function convertSrcCodeToString(src) {
	src = src.replaceAll('</body>', '\n\t</body>');
	src = src
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('\n', '<br>')
		.replaceAll('\t', '&nbsp;&nbsp;&nbsp;&nbsp;');
	return src;
}
