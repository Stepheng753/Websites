let msContainer = document.getElementById('ms-container');
let clContainer = document.getElementById('centerLine-container');
let milestoneJSON;
let numClicks = 0;

window.onload = function () {
	fetch('./milestone.json')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			milestoneJSON = json;
		})
		.then(() => {
			createMilestones();
			createTicks();
		});
};

function createMilestones() {
	for (let ms in milestoneJSON) {
		let msDiv = document.createElement('div');
		msDiv.className = 'milestone';

		let msImg = document.createElement('img');
		msImg.src = milestoneJSON[ms].Photo;

		let msTextDiv = document.createElement('div');
		msTextDiv.id = 'ms-text';
		let msTitle = document.createElement('h2');
		msTitle.innerHTML = 'I am Groot';
		let msText = document.createElement('p');
		let randNum = Math.floor(Math.random() * 500) + 1;
		for (let i = 0; i < randNum; i++) {
			msText.innerHTML += 'I am Groot. ';
		}
		msTextDiv.appendChild(msTitle);
		msTextDiv.appendChild(msText);

		if (ms % 2 == 0) {
			msDiv.appendChild(msImg);
			msDiv.appendChild(msTextDiv);
		} else {
			msDiv.appendChild(msTextDiv);
			msDiv.appendChild(msImg);
		}

		msContainer.appendChild(msDiv);
	}
}

function createTicks() {
	let centerLine = document.createElement('div');
	centerLine.id = 'centerLine';
	clContainer.appendChild(centerLine);
	for (let i = 0; i < Object.keys(milestoneJSON).length - 2; i++) {
		let tick = document.createElement('div');
		tick.className = 'tick';
		tick.style.top = 5 + ((i + 1) * 90) / (Object.keys(milestoneJSON).length - 1) + '%';
		clContainer.appendChild(tick);

		tick.onclick = function () {
			let transformY = i * (-100 / 3) + '%';
			msContainer.style.transform = 'translateY(' + transformY + ')';
		};
	}
}
