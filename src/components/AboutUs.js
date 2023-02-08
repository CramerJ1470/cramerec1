import React from "react";
const {newPage} = require('../scripts/newPage.js');
const AboutUs = () => {

	let cropped = document.getElementsByClassName("croppedup");
	
	let logo = document.getElementById("logo");

	newPage(cropped, logo);


	return (
		<><div className="title1">About Us</div>
			
		</>
	);
};

export default AboutUs;
