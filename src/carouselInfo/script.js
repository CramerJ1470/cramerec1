const slideImages = () => {
	document.getElementById("imgs");
	const leftBtn = document.getElementById("left");
	const rightBtn = document.getElementById("right");

	const img = document.querySelectorAll("#imgs img");
	console.log(`img script:`, img);
	let idx = 0;

	let interval = setInterval(run, 2000);

	function run() {
		idx++;
		changeImage();
	}

	function changeImage() {
		if (idx > img.length - 1) {
			idx = 0;
		} else if (idx < 0) {
			idx = img.length - 1;
		}

		imgs.style.transform = `translateX(${-idx * 35}px)`;
	}
    https://live.staticflickr.com/65535/52667985508_6c1a269198_w.jpg
    https://live.staticflickr.com/65535/52667479176_c312065f4b_w.jpg
	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(run, 2000);
	}

	rightBtn.addEventListener("click", () => {
		idx++;
		changeImage();
		resetInterval();
	});

	leftBtn.addEventListener("click", () => {
		idx--;
		changeImage();
		resetInterval();
	});
};

export default slideImages;
