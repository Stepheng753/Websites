function choosePage(page = '') {
	let redirects = document.getElementsByClassName('redirects');
	let index = 0;
	while (redirects.length > 0 && index < redirects.length) {
		if (redirects[index].getAttribute('id') == page) {
			redirects[index].style.setProperty('visibility', 'visible');
			index++;
		} else {
			redirects[index].parentElement.removeChild(redirects[index]);
		}
	}
}

function sliderControls() {
	let sliderControls = document.getElementById('sliderControls');
	let allSlides = document.getElementById('allSlides');
	allSlides.style.setProperty('width', allSlides.childElementCount * 100 + '%');
	for (let i = 0; i < allSlides.childElementCount; i++) {
		let circle = document.createElement('div');
		circle.className = 'sliderCircle';
		sliderControls.appendChild(circle);
	}
	let sliderCircles = sliderControls.children;
	let movePercent = 100 / sliderCircles.length;
	let first = document.querySelector('#firstProject');
	let clicked = -1;
	console.log(sliderCircles.length);
	for (let i = 0; i < sliderCircles.length; i++) {
		sliderCircles[i].onclick = () => {
			clicked = i;
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
