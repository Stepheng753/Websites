let nav = document.getElementsByTagName('nav')[0];
let mission = document.getElementById('mission');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	nav.parentNode.removeChild(nav);
} else {
	document.addEventListener('scroll', () => {
		if (window.scrollY > 200) {
			nav.classList.remove('horzNav');
			nav.classList.add('vertNav');
			mission.style.marginTop = '250px';
		} else {
			nav.classList.add('horzNav');
			nav.classList.remove('vertNav');
			mission.style.marginTop = '50px';
		}
	});
}
