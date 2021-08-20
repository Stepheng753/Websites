window.onload = function () {
	makeClouds();
	setInterval(() => {
		makeClouds();
	}, 10000);
};

function makeClouds() {
	const numClouds = Math.floor(Math.random() * 6) + 2;
	let alpha1 = 1 / 3;
	let alpha2 = 2 / 3;
	let beginRange = 100 / (numClouds * (1 - alpha1) + alpha1);
	let endRange = 100 / (numClouds * (1 - alpha2) + alpha2);
	const zoneWidth = Math.floor(Math.random() * (endRange - beginRange)) + beginRange;
	const overlap = (numClouds * zoneWidth - 100) / (numClouds - 1);
	for (let i = 0; i < numClouds; i++) {
		let randomWidth = Math.floor(Math.random() * 10) + 10;
		beginRange = i == 0 ? 2 : i * (zoneWidth - overlap);
		endRange = i * (zoneWidth - overlap) + zoneWidth - randomWidth;
		let randomLeft = Math.floor(Math.random() * (endRange - beginRange)) + beginRange;
		let randomTop = Math.floor(Math.random() * 15) + 5;
		let cloud = document.createElement('img');
		cloud.src = 'External/Landing Page/Cloud.svg';
		cloud.className = 'cloud';
		let position = 'position: absolute; left: ' + randomLeft + 'vw; top: ' + randomTop + 'vh;';
		let size = 'width: ' + randomWidth + 'vw;';
		cloud.style = position + size;
		document.body.appendChild(cloud);
	}
}

function removeClouds() {
	let clouds = document.getElementsByClassName('cloud');
	while (clouds.length > 0) {
		clouds[0].parentElement.removeChild(clouds[0]);
	}
}
