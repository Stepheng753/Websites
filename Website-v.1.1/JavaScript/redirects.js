function choosePage(page = '') {
	removeRedirects();
	let parentRedirects = document.getElementById('allRedirects');
	for (let i = 0; i < allRedirects.length; i++) {
		if (allRedirects[i].getAttribute('id') == page) {
			parentRedirects.appendChild(allRedirects[i]);
			allRedirects[i].style.setProperty('visibility', 'visible');
		}
	}
	let title = document.querySelector('#title h1');
	if (page == 'tutoring') {
		title.innerHTML = 'CrossRoads Tutoring';
	} else {
		title.innerHTML = 'Stephen Giang';
	}
	if (document.getElementById('allSlides') && document.getElementById('sliderControls').childElementCount == 0)
		sliderControls();
}

function removeRedirects() {
	let parentRedirects = document.getElementById('allRedirects');
	let childrenRedirects = [...parentRedirects.children];
	for (let i = 0; i < childrenRedirects.length; i++) {
		parentRedirects.removeChild(childrenRedirects[i]);
	}
}

function sliderControls() {
	let sliderControls = document.getElementById('sliderControls');
	let allSlides = document.getElementById('allSlides');
	allSlides.style.setProperty('width', allSlides.childElementCount * 100 + '%');

	for (let i = 0; i < allSlides.childElementCount; i++) {
		let circle = document.createElement('div');
		circle.className = 'sliderCircle';
		circle.style.setProperty('cursor', 'pointer');
		sliderControls.appendChild(circle);
	}
	let sliderCircles = sliderControls.children;
	sliderCircles[0].style.setProperty('border-color', 'var(--title-color)');
	sliderCircles[0].style.setProperty('background-color', 'var(--title-color)');

	let movePercent = 100 / sliderCircles.length;
	let first = document.getElementById('firstSlide');
	for (let i = 0; i < sliderCircles.length; i++) {
		sliderCircles[i].onclick = () => {
			console.log(i * movePercent);
			first.style.setProperty('margin-left', '-' + i * movePercent + '%');
			sliderCircles[i].style.setProperty('border-color', 'var(--title-color)');
			sliderCircles[i].style.setProperty('background-color', 'var(--title-color)');
			for (let j = 0; j < sliderCircles.length; j++) {
				if (j != i) {
					sliderCircles[j].style.setProperty('border-color', 'var(--border-color)');
					sliderCircles[j].style.setProperty('background-color', 'transparent');
				}
			}
		};
	}
}
