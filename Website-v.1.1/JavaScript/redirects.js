function choosePage(page = '') {
	console.log(page);
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
