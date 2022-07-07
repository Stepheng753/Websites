let allNavBtns = Array.from(document.getElementsByClassName('nav-item'));
let descContainer = document.getElementById('description-container');

allNavBtns.forEach((navItem, index) => {
	navItem.style.animationDelay = 0.25 * (index + 1) + 's';
	navItem.classList.add('fade-up');

	let allTxt = descContainer.querySelectorAll('.description');
	let txt = allTxt[index];

	navItem.addEventListener('mouseover', () => {
		if (!txt.classList.contains('fade-up')) {
			allTxt.forEach((item) => {
				item.style.opacity = 0;
				item.classList.remove('fade-up');
			});
			txt.classList.add('fade-up');
		}
	});
	navItem.addEventListener('mouseout', () => {
		txt.style.opacity = 1;
	});
});

function removeFadeUp() {
	let allTxt = descContainer.querySelectorAll('.description');
	let homeTxt = document.getElementById('home-txt');
	let oneIsVisible = false;
	allTxt.forEach((item) => {
		if (item != homeTxt && item.classList.contains('fade-up')) {
			oneIsVisible = true;
		}
	});
	homeTxt.style.animationDelay = '0s';
	if (!oneIsVisible) {
		homeTxt.style.opacity = 1;
	} else {
		homeTxt.style.opacity = 0;
	}
}

setTimeout(removeFadeUp, 2700);
