let code = document.getElementById('code');
let filePaths = document.getElementById('filePaths');
let output = document.getElementById('output');
let currProjectSelected = '';
let projectsJSON;

window.onload = function () {
	fetch('./projectsToDisplay.json')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			projectsJSON = json;
		})
		.then(() => {
			displayFilePaths();
		});
};

function getFilePath(project, folderIndex, fileIndex) {
	let directory = projectsJSON[project].Directory;
	let files = projectsJSON[project].Files[folderIndex];
	return directory + files.Subdirectory + files.File[fileIndex];
}

function displayFilePaths() {
	let filePathsStr = '';
	for (let projectCt = 0; projectCt < Object.keys(projectsJSON).length; projectCt++) {
		let projectKey = Object.keys(projectsJSON)[projectCt];
		let setCurrProjectSelectedStr = "setCurrProjectSelected('" + projectKey + "');";
		filePathsStr +=
			'<div class="Project-Name" title=" ' +
			projectsJSON[projectKey].Description +
			'" onclick="' +
			setCurrProjectSelectedStr +
			' ">' +
			projectsJSON[projectKey].Name +
			'</div>' +
			'\n';

		if (currProjectSelected == projectKey) {
			for (let subDirCt = 0; subDirCt < projectsJSON[projectKey].Files.length; subDirCt++) {
				filePathsStr +=
					'<div class="subdirectory">' +
					projectsJSON[projectKey].Files[subDirCt].Subdirectory +
					'</div>' +
					'\n';

				for (let fileCt = 0; fileCt < projectsJSON[projectKey].Files[subDirCt].File.length; fileCt++) {
					setSrcCodeStr =
						"displayCode(getFilePath('" + projectKey + "', " + subDirCt + ', ' + fileCt + '), code, true);';
					setOutputStr = "displayOutput('" + projectKey + "', " + subDirCt + ');';
					focusOutput = 'output.focus();';

					filePathsStr +=
						'<div class="file" onclick="' +
						setSrcCodeStr +
						setOutputStr +
						focusOutput +
						'">' +
						projectsJSON[projectKey].Files[subDirCt].File[fileCt] +
						'</div>' +
						'\n';
				}
			}
		}
	}
	filePaths.innerHTML = stringToHTML(filePathsStr);
}

function displayCode(file, domElement, domHTML) {
	if (file.includes('.png') || file.includes('.jpg') || file.includes('.jpeg')) {
		domElement.innerHTML = '<img src="' + file + '" alt="' + file + '">';
	} else {
		fetch(file)
			.then((response) => {
				return response.text();
			})
			.then((text) => {
				code.classList.remove('prettyprinted');
				domElement.innerHTML = stringToHTML(text, domHTML);
				PR.prettyPrint();
			});
	}
}

function displayOutput(project, folderIndex) {
	let files = projectsJSON[project].Files[folderIndex];
	let outputFound = false;
	for (let i = 0; i < files.File.length; i++) {
		let file = files.File[i];
		if (output.src.includes(file)) {
			return;
		}
		if (file.includes('.html')) {
			output.src = getFilePath(project, folderIndex, i);
			outputFound = true;
		}
	}
	if (!outputFound) {
		output.data = '';
	}
}

function stringToHTML(src, isHTML = false) {
	if (isHTML) {
		src = src
			.replaceAll('></body>', '>\n\t</body>')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll(' ', '&nbsp;');
	}
	src = src.replaceAll('\n', '<br>').replaceAll('\t', '&nbsp;&nbsp;&nbsp;&nbsp;');
	return src;
}

function setCurrProjectSelected(projectKey) {
	if (currProjectSelected == projectKey) {
		currProjectSelected = '';
	} else {
		currProjectSelected = projectKey;
	}
	displayFilePaths();
}

// let currCodeWidth = code.offsetWidth;
// onmouseup = function (e) {
// 	if (code.offsetWidth != currCodeWidth) {
// 		currCodeWidth = code.offsetWidth;
// 		console.log(currCodeWidth);
// 		if (output.src) {
// 			output.contentWindow.location.reload();
// 			console.log('Here');
// 		}
// 	}
// };

// onmouseover = function (e) {
// 	let border = code.offsetLeft + code.offsetWidth;
// 	if (Math.abs(e.clientX - border) < 10) {
// 		document.body.style.cursor = 'col-resize';
// 	}
// };

// onmousedown = function (e) {
// 	console.log(e.clientX);
// 	let border = code.offsetLeft + code.offsetWidth;
// 	if (Math.abs(e.clientX - border) < 50) {
// 		document.body.style.cursor = 'col-resize';
// 	}
// };

// onmouseup = function (e) {
// 	document.body.style.cursor = 'default';
// 	code.style.width = e.clientX + 'px';
// 	console.log('A', e.clientX - code.offsetLeft + 'px');
// };
