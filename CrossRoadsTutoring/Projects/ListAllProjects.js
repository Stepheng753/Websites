fetch('./ProjectsToDisplay.json')
	.then((response) => {
		return response.json();
	})
	.then((file) => printFile(file.Projects[0].Directory + file.Projects[0].Files[1]));

function printFile(file) {
	fetch(file)
		.then((response) => {
			return response.text();
		})
		.then((text) => console.log(text));
}
