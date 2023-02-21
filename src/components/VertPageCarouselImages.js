import React from "react";


function VertPageCarouselImages({panelinfo, vert}) {
	console.log(	`pci:`,panelinfo);

	var imagesHtml = '<div class="image-container" id="imgs">';

	var data = panelinfo;
	let imageList = [];
    console.log(`data:`,data);
	data.map((image) => {return imageList.push(image.src);});
	console.log(imageList);
	imageList.map(
	 (each, index) =>
	  		(imagesHtml =
	  			imagesHtml +
	 			`<img className="horizontal" src=${each} alt=${index}/>`)
	 );
	 imagesHtml = imagesHtml + "</div>";

	 
   
	

	function heyNow() {
		const imgs = document.getElementById("imgs");
        console.log(imgs);
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
          
		});

		leftBtn.addEventListener("click", () => {
			idx--;
			changeImage();
			resetInterval();
          
         
		});
	}
	setTimeout(heyNow, 2000);
	
	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: imagesHtml }} />
		</>
	);
}


export default VertPageCarouselImages;