let leftBtnEnable = true;
let rightBtnEnable = true;
function turnPages() {
	let nextBtn = document.querySelector('#next-btn');
	let prevBtn = document.querySelector('#prev-btn');
	let startBtn = document.querySelector('#start-btn');
	let endBtn = document.querySelector('#end-btn');
	let nextPage = 0;
	let prevPage = -1;
	let pages = document.querySelectorAll('.page');

	nextBtn.addEventListener('click', () => {
		if (nextPage < pages.length) {
			let page = pages[nextPage];
			page.classList.remove('flip-page-right');
			page.classList.add('flip-page-left');

			let frontOfPage = document.querySelector('#' + page.id + '> .front-of-page');
			let backOfPage = document.querySelector('#' + page.id + '> .back-of-page');

			if (frontOfPage && backOfPage) {
				frontOfPage.classList.remove('wait-visible');
				frontOfPage.classList.add('wait-hidden');
				frontOfPage.style.zIndex = 0;

				backOfPage.classList.remove('wait-hidden');
				backOfPage.classList.add('wait-visible');
				backOfPage.style.zIndex = 1;
			}
			prevPage = nextPage;
			nextPage++;
		}
	});
	prevBtn.addEventListener('click', () => {
		if (prevPage >= 0) {
			let page = pages[prevPage];
			page.classList.remove('flip-page-left');
			page.classList.add('flip-page-right');

			let frontOfPage = document.querySelector('#' + page.id + '> .front-of-page');
			let backOfPage = document.querySelector('#' + page.id + '> .back-of-page');

			if (frontOfPage && backOfPage) {
				frontOfPage.classList.remove('wait-hidden');
				frontOfPage.classList.add('wait-visible');
				frontOfPage.style.zIndex = 1;

				backOfPage.classList.remove('wait-visible');
				backOfPage.classList.add('wait-hidden');
				backOfPage.style.zIndex = 0;
			}
			nextPage = prevPage;
			prevPage--;
		}
	});
	startBtn.addEventListener('click', () => {
		if (leftBtnEnable) {
			rightBtnEnable = false;
			prevBtn.click();
			let timer = setInterval(() => {
				if (prevPage < 0) {
					clearInterval(timer);
					rightBtnEnable = true;
				} else {
					prevBtn.click();
				}
			}, 500);
		}
	});
	endBtn.addEventListener('click', () => {
		if (rightBtnEnable) {
			leftBtnEnable = false;
			nextBtn.click();
			let timer = setInterval(() => {
				if (nextPage >= pages.length) {
					clearInterval(timer);
					leftBtnEnable = true;
				} else {
					nextBtn.click();
				}
			}, 500);
		}
	});
}

turnPages();
