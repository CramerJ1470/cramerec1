import React from "react";


function CarouselImages(images) {
	//console.log(images.images);

	var imagesHtml = '<div class="image-container" id="imgs">';

	var data = images.images;
	//console.log(`data:`, data);
	let imageList = [];

	data.map((image, index) => imageList.push(image.srcbefore, image.srcafter));
	//console.log(imageList);
	imageList.map(
		(each, index) =>
			(imagesHtml =
				imagesHtml +
				`<img className="horizontal" src=${each} alt=${index}/>`)
	);
	imagesHtml = imagesHtml + "</div>";
	//console.log(`imagesHtml:`, imagesHtml);
	// slideImages();
	function picTitleLabel(idx) {
		const picTitle = document.getElementById("picTitle");
      //  console.log(`picTitle`,picTitle);
		if (idx % 2 === 0) {
			picTitle.innerText = "before";
		} else picTitle.innerText = "after";
	}

	function heyNow() {
		const imgs = document.getElementById("imgs");
		const leftBtn = document.getElementById("left");
		const rightBtn = document.getElementById("right");

		const img = document.getElementsByTagName("img");

		//     for (let i =0; i < img1.length; i++) {
		//    if (img1[i].attribute[0].nodeValue === "horizontal") {img.push(img1[i]);}}

		//const img = img1.map(hor => hor.localname==="img");
		//console.log(`img:`, img);

		let idx = 0;

		let interval = setInterval(run, 2000);

		function run() {
			idx++;
			changeImage();
			resetInterval();
            picTitleLabel(idx);
		}

		function changeImage() {
			if (idx > img.length - 3) {
				idx = 0;
				
			} else if (idx < 0) {
				idx = img.length - 3;
				
			}

			imgs.style.transform = `translateX(${-idx * 100}%)`;
		}

		function resetInterval() {
			clearInterval(interval);
			interval = setInterval(run, 2000);
		}

		rightBtn.addEventListener("click", () => {
			idx++;
			changeImage();
			resetInterval();
            picTitleLabel(idx);
		});

		leftBtn.addEventListener("click", () => {
			idx--;
			changeImage();
			resetInterval();
            picTitleLabel(idx);
		});
	}
	setTimeout(heyNow, 2000);

	return (
		<>
			<div id="picTitle" className="caseTitle"></div>
			<div dangerouslySetInnerHTML={{ __html: imagesHtml }} />
		</>
	);
}

export default CarouselImages;
