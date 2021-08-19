document.write(
	'<div class="centerDiv"> <div id="title"> <img src="External/Icon.svg" id="logo" onclick="location.href=\'Home.html\';" /> <h1 onclick="location.href=\'Home.html\';">Stephen Giang</h1> <fieldset id="themes"> <legend>Themes</legend> <input type="radio" value="1" id="theme-1" name="theme" onclick="changeTheme(1);" checked /><label for="theme-1" >Theme 1</label > <input type="radio" value="2" id="theme-2" name="theme" onclick="changeTheme(2);" /><label for="theme-2" >Theme 2</label > <input type="radio" value="3" id="theme-3" name="theme" onclick="changeTheme(3);" /><label for="theme-3" >Theme 3</label > <input type="radio" value="4" id="theme-4" name="theme" onclick="changeTheme(4);" /><label for="theme-4" >Theme 4</label > </fieldset> </div> </div> <div id="hoverRadius"> <div class="nav"> <div id="coverBlock"></div> <div onclick="location.href=\'Home.html\';" class="block" id="topBlock"><h3>Home</h3></div> <div onclick="location.href=\'Home.html\';" class="block" id="midBlock"><h3>Projects</h3></div> <div onclick="location.href=\'Home.html\';" class="block" id="midBlock"><h3>Documents</h3></div> <div onclick="location.href=\'Home.html\';" class="block" id="midBlock"><h3>Biography</h3></div> <div onclick="location.href=\'Home.html\';" class="block" id="midBlock"><h3>Tutoring</h3></div> <div onclick="location.href=\'Home.html\';" class="block" id="endBlock"><h3>Contact</h3></div> </div> </div> <div id="mouseFollower"></div>'
);

window.onload = function () {
	mouseLoc();
	borderNav();
};

function mouseLoc() {
	let style;
	document.body.onmousemove = function (event) {
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
	document.body.onmousedown = function (event) {
		let mouseFollower = document.getElementById('mouseFollower');
		let color = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 25%);';
		mouseFollower.style = style + 'background-color: ' + color + '; border: 2pt solid ' + color + ';';
	};
	document.body.onmouseup = function (event) {
		let mouseFollower = document.getElementById('mouseFollower');
		mouseFollower.style = style;
	};
}

function borderNav() {
	let nav = document.querySelector('.nav');
	let block = document.getElementsByClassName('block');
	for (let i = 0; i < block.length; i++) {
		block[i].onmouseover = function () {
			nav.style = 'border: hidden';
			block[i].style = 'border: 2pt solid var(--border-color);';
			for (let j = 0; j < block.length; j++) {
				if (j != i && block[j].id == 'topBlock') {
					block[j].style =
						'border-top: 2pt solid var(--border-color); border-right: 2pt solid var(--border-color);';
				} else if (j != i && block[j].id == 'midBlock') {
					block[j].style = 'border-right: 2pt solid var(--border-color);';
				} else if (j != i && block[j].id == 'endBlock') {
					block[j].style =
						'border-bottom: 2pt solid var(--border-color); border-right: 2pt solid var(--border-color);';
				}
			}
		};
		block[i].onmouseout = function () {
			for (let j = 0; j < block.length; j++) {
				block[j].style =
					'border: 1pt solid var(--border-color); border-right: 1.5pt solid var(--border-color);';
			}
			nav.style = 'border: 2pt solid var(--border-color);';
		};
	}
}

function changeTheme(index) {
	let selectedRadio = document.getElementsByName('theme');
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
}
