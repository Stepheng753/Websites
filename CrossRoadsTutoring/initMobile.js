let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	link.href = './mobile-style.css';
} else {
	link.href = './style.css';
}

head.appendChild(link);
