let link = document.getElementsByTagName('link')[0];

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	link.href = './mobile-style.css';
}
