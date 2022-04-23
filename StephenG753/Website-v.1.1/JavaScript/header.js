var allRedirects;

window.onload = () => {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		window.location = 'https://stepheng753.com/Website/Website-v.1.0/Home.html';
	}
	allRedirects = [...document.getElementsByClassName('redirects')];
	if (window.location.search.split('?')[1]) {
		let parameters = window.location.search.split('?')[1].split('&');
		console.log(parameters[0].substring(parameters[0].indexOf('ref=') + 4, parameters[0].length));
		choosePage(parameters[0].substring(parameters[0].indexOf('ref=') + 4, parameters[0].length));
	} else {
		choosePage('home');
	}
	changeTheme(Math.floor(Math.random() * 4) + 1);
	mouseLoc();
	borderNav();
};

function mouseLoc() {
	let style;
	document.body.onmousemove = (event) => {
		let pageX = event.pageX;
		let pageY = event.pageY;
		let diameter = 25;
		let mouseFollower = document.getElementById('mouseFollower');
		let position =
			'position: absolute; top: ' + (pageY - diameter / 2) + 'px; left: ' + (pageX - diameter / 2) + 'px;';
		let border = 'border: 2pt solid black; border-radius: 100px; z-index: 1;';
		let size = 'width: ' + diameter + 'px; height: ' + diameter + 'px; ';
		style = position + border + size;
		mouseFollower.style = style;
	};
	document.body.onmousedown = () => {
		let mouseFollower = document.getElementById('mouseFollower');
		let color = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 25%);';
		mouseFollower.style = style + 'background-color: ' + color + '; border: 2pt solid ' + color + ';';
	};
	document.body.onmouseup = () => {
		let mouseFollower = document.getElementById('mouseFollower');
		mouseFollower.style = style;
	};
}

function borderNav() {
	let nav = document.querySelector('.nav');
	let block = document.getElementsByClassName('block');
	for (let i = 0; i < block.length; i++) {
		block[i].onmouseover = () => {
			nav.style.setProperty('border', 'hidden');
			block[i].style.setProperty('border', '2pt solid var(--border-color);');
			for (let j = 0; j < block.length; j++) {
				if (j != i && block[j].id == 'topBlock') {
					block[j].style.setProperty('border-top', '2pt solid var(--border-color);');
					block[j].style.setProperty('border-right', '2pt solid var(--border-color);');
				} else if (j != i && block[j].id == 'midBlock') {
					block[j].style.setProperty('border-right', '2pt solid var(--border-color);');
				} else if (j != i && block[j].id == 'endBlock') {
					block[j].style.setProperty('border-bottom', '2pt solid var(--border-color);');
					block[j].style.setProperty('border-right', '2pt solid var(--border-color);');
				}
			}
		};
		block[i].onmouseout = () => {
			nav.style.setProperty('border', '2pt solid var(--border-color);');
		};
	}
}

function changeTheme(index) {
	let cssColors = document.querySelector(':root');
	if (index == 1) {
		cssColors.style.setProperty('--border-color', '#075a79');
		cssColors.style.setProperty('--block-color', '#568ea3');
		cssColors.style.setProperty('--title-color', '#b31b1b');
		cssColors.style.setProperty('--text-color', '#000');
		cssColors.style.setProperty('--color-grad-1', '#568ea3');
		cssColors.style.setProperty('--color-grad-2', '#90d4e0');
		cssColors.style.setProperty('--color-grad-3', '#ffe8d1');
	}
	if (index == 2) {
		cssColors.style.setProperty('--border-color', '#3c1d49');
		cssColors.style.setProperty('--block-color', '#ffa69e');
		cssColors.style.setProperty('--title-color', '#aa4465');
		cssColors.style.setProperty('--text-color', '#000');
		cssColors.style.setProperty('--color-grad-1', '#3fcaba');
		cssColors.style.setProperty('--color-grad-2', '#ddfff7');
		cssColors.style.setProperty('--color-grad-3', '#ffa69e');
	}
	if (index == 3) {
		cssColors.style.setProperty('--border-color', '#f9a39b');
		cssColors.style.setProperty('--block-color', '#efbdca');
		cssColors.style.setProperty('--title-color', '#f67451');
		cssColors.style.setProperty('--text-color', '#000');
		cssColors.style.setProperty('--color-grad-1', '#87e8d1');
		cssColors.style.setProperty('--color-grad-2', '#9999ff');
		cssColors.style.setProperty('--color-grad-3', '#cffcff');
	}
	if (index == 4) {
		cssColors.style.setProperty('--border-color', '#5F6D81');
		cssColors.style.setProperty('--block-color', '#a3001b');
		cssColors.style.setProperty('--title-color', '#a3001b');
		cssColors.style.setProperty('--text-color', '#fff');
		cssColors.style.setProperty('--color-grad-1', '#000');
		cssColors.style.setProperty('--color-grad-2', '#fff');
		cssColors.style.setProperty('--color-grad-3', '#a3001b');
	}
	document.getElementById('theme-' + index).setAttribute('checked', true);
}
