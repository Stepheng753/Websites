let allJobBoxes = Array.from(document.getElementsByClassName('job-box'));

allJobBoxes.forEach((job) => {
	job.addEventListener('click', () => {
		modifyJobClassOnClick(job);
		modifyOverlayClassOnClick(job);
		modifyJobImgOnClick(job);
		modifyJobTxtOnClick(job);
	});
});

function modifyJobClassOnClick(job) {
	if (!job.classList.contains('rotate-0-180')) {
		job.classList.remove('rotate-180-360');
		job.classList.add('rotate-0-180');
	} else {
		job.classList.remove('rotate-0-180');
		job.classList.add('rotate-180-360');
	}
}

function modifyOverlayClassOnClick(job) {
	let overlay = job.querySelector('.overlay');
	if (job.classList.contains('rotate-0-180')) {
		overlay.style.height = '100%';
		overlay.style.width = '100%';
	}
}

function modifyJobImgOnClick(job) {
	let img = job.querySelector('img');
	if (job.classList.contains('rotate-0-180')) {
		img.classList.remove('rotate-no-fade');
		img.classList.add('rotate-fade');
	} else {
		img.classList.remove('rotate-fade');
		img.classList.add('rotate-no-fade');
	}
}

function modifyJobTxtOnClick(job) {
	let txt = job.querySelector('.job-txt-box');
	if (job.classList.contains('rotate-0-180')) {
		txt.classList.remove('visible-hidden');
		txt.classList.add('hidden-visible');
		txt.style.height = '100%';
		txt.style.width = '100%';
	} else {
		txt.classList.remove('hidden-visible');
		txt.classList.add('visible-hidden');
	}
}
