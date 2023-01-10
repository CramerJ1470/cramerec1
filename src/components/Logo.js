import React from "react";
import  {openup,movedon} from './logo1.js';
import Navbar1 from "./Navbar1";
const logo = require("../assets/logo.png");

const Logo = () => {

   
	
	
    
	return (
		<>
			<div>
			<img type="button" src={logo} id="logo" className="logo" onClick={openup} alt="logo"></img>  
			<Navbar1 movedon={movedon}/>
			
			</div>
		</>
	);
};

export default Logo;