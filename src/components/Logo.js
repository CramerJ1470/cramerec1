import React from "react";
import  {openup} from './logo1.js';
const logo = require("../assets/logo.png");

const Logo = () => {

	return (
		<>
			<div>
			<img type="button" src={logo} id="logo" className="logo2" onClick={openup} alt="logo"></img>  
			</div>
		</>
	);
};

export default Logo;