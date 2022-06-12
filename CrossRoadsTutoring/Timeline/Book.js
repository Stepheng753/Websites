window.onload = function () {
	fetch('./Lorem.txt')
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			let colors = ['green', 'yellow', 'orange', 'purple', 'pink', 'brown'];
			let allWords = split(text, ' ');
			let pageIndex = 1;
			let allWordsIndex = 0;
			while (allWordsIndex < allWords.length) {
				let pageDom = document.createElement('div');
				pageDom.id = 'p' + (pageIndex++).toString();
				pageDom.classList.add('page');
				pageDom.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
				pageDom.style.zIndex = 100 - pageIndex;

				let frontOfPageDom = document.createElement('p');
				frontOfPageDom.classList.add('front-of-page');
				frontOfPageDom.innerHTML = '';

				let backOfPageDom = document.createElement('p');
				backOfPageDom.classList.add('back-of-page');
				backOfPageDom.innerHTML = '';

				pageDom.appendChild(frontOfPageDom);
				pageDom.appendChild(backOfPageDom);
				document.querySelector('#page-container').appendChild(pageDom);

				let frontBack = [frontOfPageDom, backOfPageDom];
				for (let i = 0; i < 2; i++) {
					let frontBackDom = frontBack[i];
					while (allWordsIndex < allWords.length && frontBackDom.scrollHeight <= frontBackDom.offsetHeight) {
						if (allWords[allWordsIndex].includes('newpage')) {
							allWordsIndex++;
							break;
						}
						frontBackDom.innerHTML += allWords[allWordsIndex++] + ' ';
					}
					if (allWordsIndex < allWords.length && !allWords[allWordsIndex - 1].includes('newpage')) {
						allWordsIndex--;
						let removeLastWord = frontBackDom.innerHTML.split(/\s+/);
						removeLastWord.pop();
						removeLastWord.pop();
						frontBackDom.innerHTML = removeLastWord.join(' ');
					}
				}
			}
		})
		.then(() => {
			turnPages();
		});
};

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

				backOfPage.classList.remove('wait-hidden');
				backOfPage.classList.add('wait-visible');
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

				backOfPage.classList.remove('wait-visible');
				backOfPage.classList.add('wait-hidden');
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

function split(text, deliminator) {
	let splitArr = [];
	let startIndex = 0;
	let endIndex = text.indexOf(deliminator);
	while (endIndex != -1) {
		if (text[startIndex] == '<') {
			let endTag =
				text.indexOf('>', startIndex) < text.indexOf(' ', startIndex)
					? text.indexOf('>', startIndex)
					: text.indexOf(' ', startIndex);
			let tagName = text.substring(startIndex + 1, endTag);
			let nextStartTag = text.indexOf('</' + tagName, endTag);
			let nextEndTag = text.indexOf('>', nextStartTag);
			splitArr.push(text.substring(startIndex, nextEndTag + 1));
			startIndex = nextEndTag + 1;
		} else {
			splitText = text.substring(startIndex, endIndex);
			if (splitText.includes('\n')) {
				let newline = splitText.replaceAll('\n', '<br> ').split(' ');
				for (let i = 0; i < newline.length; i++) {
					splitArr.push(newline[i]);
				}
			} else {
				splitArr.push(splitText);
			}
			startIndex = endIndex + 1;
		}
		endIndex = text.indexOf(deliminator, startIndex);
	}
	endIndex = text.length;
	splitText = text.substring(startIndex, endIndex);
	splitArr.push(splitText);

	return splitArr;
}
