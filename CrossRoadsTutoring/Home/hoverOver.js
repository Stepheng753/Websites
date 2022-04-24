window.onload = function () {
	selectChoice();
};

function selectChoice() {
	let letters = document.getElementsByClassName('letter');
	for (let i = 0; i < letters.length; i++) {
		letters[i].onmouseover = function () {
			letters[i].classList.add('highlight-letter');
			letters[i].nextElementSibling.classList.add('bold-option');
		};
		letters[i].onmouseout = function () {
			letters[i].classList.remove('highlight-letter');
			letters[i].nextElementSibling.classList.remove('bold-option');
		};
		letters[i].onclick = function () {
			let link = letters[i].parentElement.dataset.link;
			if (link) {
				window.location.href = link;
			}
		};
	}

	let options = document.getElementsByClassName('option');
	for (let i = 0; i < options.length; i++) {
		options[i].onmouseover = function () {
			options[i].classList.add('bold-option');
			options[i].previousElementSibling.classList.add('highlight-letter');
		};
		options[i].onmouseout = function () {
			options[i].classList.remove('bold-option');
			options[i].previousElementSibling.classList.remove('highlight-letter');
		};
		options[i].onclick = function () {
			let link = options[i].parentElement.dataset.link;
			if (link) {
				window.location.href = link;
			}
		};
	}
}
