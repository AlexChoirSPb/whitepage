const images = document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
	const widthwin=window.screen.width;
	console.log(widthwin);	
	console.log('resize');
	width = document.querySelector('.slider').offsetWidth;
	console.log(width);
	sliderLine.style.width = width*images.length + 'px';
	if (widthwin >= 576) {
		images.forEach(item => {
		item.style.width = width - 60 + 'px';
		item.style.height = 'auto';
		})
	}

	else {
		images.forEach(item => {
		item.style.width = width - 20 + 'px';
		item.style.height = 'auto';
		})
	}
}

init();
window.addEventListener('resize', init);

function slide() {
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
}

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + (count*width-10) +'px)';
}

setInterval (slide, 4000);