window.onload = () => {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		window.location = 'https://stepheng753.com/Website/Website-v.1.0/Home.html';
	}
	document.onkeydown = moveBike;
	document.onkeyup = resizeKeys;
	hoverBuildings();
	makeClouds();
	setInterval(() => {
		makeClouds();
	}, 10000);
};

function hoverBuildings() {
	let house = document.getElementById('house');
	let school = document.getElementById('school');
	house.onmouseover = () => {
		house.style.setProperty('transform', 'translateY(-2.5vh) scale(1.2)');
	};
	house.onmouseout = () => {
		house.style.setProperty('transform', 'scale(1)');
	};
	school.onmouseover = () => {
		school.style.setProperty('transform', 'translateY(-2.5vh) scale(1.2)');
	};
	school.onmouseout = () => {
		school.style.setProperty('transform', 'scale(1)');
	};
}

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
		cloud.src = 'Landing Page/Cloud.svg';
		cloud.className = 'cloud';
		let position = 'position: absolute; left: ' + randomLeft + 'vw; top: ' + randomTop + 'vh;';
		let size = 'width: ' + randomWidth + 'vw;';
		let cursor = 'cursor: pointer;';
		cloud.style = position + size + cursor;
		document.body.appendChild(cloud);
		cloud.onclick = () => {
			window.open('External/Landing Clouds Math/Clouds.pdf', '_blank');
		};
	}
}

function removeClouds() {
	let clouds = document.getElementsByClassName('cloud');
	while (clouds.length > 0) {
		clouds[0].parentElement.removeChild(clouds[0]);
	}
}

function moveBike(event) {
	const speed = 1;
	let bike = document.getElementById('biker');
	let house = document.getElementById('house');
	let school = document.getElementById('school');
	let leftKey = document.getElementById('lkey');
	let rightKey = document.getElementById('rkey');
	let upKey = document.getElementById('ukey');
	let houseRange = [5, 20];
	let schoolRange = [63, 85];

	let leftVal = Math.round(
		convertPXToVW(getComputedStyle(bike).left.substring(0, getComputedStyle(bike).left.indexOf('p')))
	);
	let bikeWidth = Math.round(
		convertPXToVW(getComputedStyle(bike).width.substring(0, getComputedStyle(bike).width.indexOf('p')))
	);
	if ((event.key == 'ArrowLeft' || event.key.toLowerCase() == 'a') && leftVal - speed > 0) {
		bike.style.setProperty('left', leftVal - speed + 'vw');
		bike.style.setProperty('transform', 'scaleX(1)');
		leftKey.style.setProperty('transform', 'scale(1.5)');
		rightKey.style.setProperty('transform', 'scale(1)');
	}
	if ((event.key == 'ArrowRight' || event.key.toLowerCase() == 'd') && leftVal + bikeWidth + speed < 100) {
		bike.style.setProperty('left', leftVal + speed + 'vw');
		bike.style.setProperty('transform', 'scaleX(-1)');
		leftKey.style.setProperty('transform', 'scale(1)');
		rightKey.style.setProperty('transform', 'scale(1.5)');
	}
	if (leftVal <= houseRange[1] && leftVal >= houseRange[0]) {
		house.style.setProperty('transform', 'translateY(-2.5vh) scale(1.2)');
		upKey.style.setProperty('transform', 'translateY(-7vh) scale(1.5)');
	} else if (leftVal <= schoolRange[1] && leftVal >= schoolRange[0]) {
		school.style.setProperty('transform', 'translateY(-4vh) scale(1.2)');
		upKey.style.setProperty('transform', 'translateY(-7vh) scale(1.5)');
	} else {
		house.style.setProperty('transform', 'scale(1)');
		school.style.setProperty('transform', 'scale(1)');
		upKey.style.setProperty('transform', 'translateY(-7vh) scale(1)');
	}

	if (
		(event.key == 'ArrowUp' || event.key.toLowerCase() == 'w' || event.key == 'Enter' || event.key == ' ') &&
		leftVal <= houseRange[1] &&
		leftVal >= houseRange[0]
	) {
		window.location = 'Home';
	}
	if (
		(event.key == 'ArrowUp' || event.key.toLowerCase() == 'w' || event.key == 'Enter' || event.key == ' ') &&
		leftVal <= schoolRange[1] &&
		leftVal >= schoolRange[0]
	) {
		window.location = 'Home.html?ref=tutoring&theme=1';
	}
}

function convertPXToVW(px) {
	return px * (100 / document.documentElement.clientWidth);
}

function convertPXToVH(px) {
	return px * (100 / document.documentElement.clientHeight);
}

function resizeKeys(event) {
	let leftKey = document.getElementById('lkey');
	let rightKey = document.getElementById('rkey');
	leftKey.style.setProperty('transform', 'scale(1)');
	rightKey.style.setProperty('transform', 'scale(1)');
}
