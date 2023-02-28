import React from "react";

function CarouselImages(images) {
	var data = images.images;
	let imageList = [];
	let activeSlide;
	let newList = [];
	let picList= [];
	data.map((image, index) => imageList.push(image.srcbefore, image.srcafter));
	function getPics() {
		newList = document.querySelectorAll(".horizontal");
		console.log(newList);
	}
	function setActiveSlide() {
		picList.forEach((each) => {
			console.log(each);
			each.classList.remove("active");
			each.classlist.add("inactive");
			
		});
		picList[activeSlide].classList.add("active");
	}
	function changePic() {
		let picList=newList;
		let picListLength = picList.length;
		for (let a = 0; a < picListLength; a++) {
			activeSlide = a;
			console.log(`activeSlide:`,activeSlide);
			setTimeout(setActiveSlide(), 20000);
		}
	}

	getPics();
	changePic();

	return (
		<>
			<div id="picTitle" className="caseTitle"></div>
			<div className="image-container" id="imgs">
				{imageList.map((each, index) => {
					return (
						<img
							className="horizontal"
							src={each}
							alt={index}
							key={index + "1"}
						/>
					);
				})}
			</div>
			{/* <div dangerouslySetInnerHTML={{ __html: imagesHtml }} /> */}
		</>
	);
}

export default CarouselImages;
