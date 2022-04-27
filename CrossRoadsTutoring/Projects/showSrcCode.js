let code = document.getElementById('code');
let filePaths = document.getElementById('filePaths');
let output = document.getElementById('output');
let projectsJSON;

window.onload = function () {
	fetch('./projectsToDisplay.json')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			projectsJSON = json;
			setSrcCode(getFilePath('CurrWebsiteProjects', 0, 1), code, true);
		})
		.then(() => {
			let filePathsStr = '';
			for (let i = 0; i < Object.keys(projectsJSON).length; i++) {
				let projectKey = Object.keys(projectsJSON)[i];
				filePathsStr += projectsJSON[projectKey].Name + '\n';
				for (let j = 0; j < projectsJSON[projectKey].Files.length; j++) {
					filePathsStr +=
						'<div class="subdirectory">' + projectsJSON[projectKey].Files[j].Subdirectory + '</div>';
					for (let k = 0; k < projectsJSON[projectKey].Files[j].File.length; k++) {
						isHTML =
							projectsJSON[projectKey].Files[j].File[k].includes('.html') ||
							projectsJSON[projectKey].Files[j].File[k].includes('.py');
						filePathsStr +=
							'<div class="file" onclick="setSrcCode(getFilePath(\'' +
							projectKey +
							"'," +
							j +
							',' +
							k +
							'), code,' +
							isHTML +
							')' +
							"; setOutput('" +
							projectKey +
							"'," +
							j +
							')">' +
							projectsJSON[projectKey].Files[j].File[k] +
							'</div>' +
							'\n';
					}
				}
			}
			filePaths.innerHTML = convertSrcCodeToString(filePathsStr);
		});
};

function getFilePath(project, folderIndex, fileIndex) {
	let directory = projectsJSON[project].Directory;
	let files = projectsJSON[project].Files[folderIndex];
	console.log(files.Subdirectory, ':::', directory + files.Subdirectory + files.File[fileIndex]);
	return directory + files.Subdirectory + files.File[fileIndex];
}

function setSrcCode(file, domElement, domHTML) {
	if (file.includes('.png') || file.includes('.jpg') || file.includes('.jpeg')) {
		domElement.innerHTML = '<img src="' + file + '" alt="' + file + '">';
	} else {
		fetch(file)
			.then((response) => {
				return response.text();
			})
			.then((text) => {
				domElement.innerHTML = convertSrcCodeToString(text, domHTML);
			});
	}
}

function setOutput(project, folderIndex) {
	let files = projectsJSON[project].Files[folderIndex];
	let outputFound = false;
	for (let i = 0; i < files.File.length; i++) {
		let file = files.File[i];
		if (output.data.includes(file)) {
			return;
		}
		if (file.includes('.html')) {
			output.data = getFilePath(project, folderIndex, i);
			outputFound = true;
		}
	}
	if (!outputFound) {
		output.data = '';
	}
}

function convertSrcCodeToString(src, isHTML = false) {
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
