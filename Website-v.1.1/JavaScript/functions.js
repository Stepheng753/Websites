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
		let color =
			'rgb(' +
			Math.floor(Math.random() * 256) +
			',' +
			Math.floor(Math.random() * 256) +
			',' +
			Math.floor(Math.random() * 256) +
			')';
		mouseFollower.style = style + 'background-color: ' + color;
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
			block[i].style = 'border: 2pt solid #075a79;';
			for (let j = 0; j < block.length; j++) {
				if (j != i && block[j].id == 'topBlock') {
					block[j].style = 'border-top: 2pt solid #075a79; border-right: 2pt solid #075a79;';
				} else if (j != i && block[j].id == 'midBlock') {
					block[j].style = 'border-right: 2pt solid #075a79;';
				} else if (j != i && block[j].id == 'endBlock') {
					block[j].style = 'border-bottom: 2pt solid #075a79; border-right: 2pt solid #075a79;';
				}
			}
		};
		block[i].onmouseout = function () {
			for (let j = 0; j < block.length; j++) {
				block[j].style = 'border: 1pt solid #075a79; border-right: 1.5pt solid #075a79;';
			}
			nav.style = 'border: 2pt solid #075a79;';
		};
	}
}
