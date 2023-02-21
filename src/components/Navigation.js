import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
//import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import Banner from "./Banner"; 
export function navOpen() {
	const open_btn = document.querySelector(".open-btn");
	
	const close_btn = document.querySelector(".close-btn");
	const nav = document.querySelectorAll(".nav");
	open_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => {nav_el.classList.add("visible");open_btn.style.display= "none";});
		
	});
	close_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => {nav_el.classList.remove("visible");open_btn.style.display="";
		
	});});
	
}
 export function startpage() {
	document.getElementById("cropped").classList.add("croppedup");
	document.getElementById("logo").classList.add("leftTop");
 }

const Navigation = () => {
	//const history = useHistory();



	return (
		<>

			<button className="nav-btn open-btn" onClick={navOpen}>
				<i className="fas fa-bars"></i>
			</button>
			<div className="nav nav-black">
				<div className="nav nav-red">
					<div className="nav nav-white">
						<button className="nav-btn close-btn">
							<i className="fas fa-times"></i>
						</button>

						<ul className="list">
							<li>
								<Nav.Link
									className="linkText bold"
									href="/home"
									
								>
									Home
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									className="linkText bold"
									href="/aboutus"
								>
									About Us
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									className="linkText bold"
									href="/ourwork"
								>
									Our Work
								</Nav.Link>
							</li>

							<li>
								<Nav.Link
									className="linkText bold"
									href="/products"
								>
									Products
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									className="linkText bold"
									href="/guidelinesandtips"
								>
									Guidelines and Tips
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									className="linkText bold"
									href="/contactus"
								>
									Contact Us
								</Nav.Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
export default Navigation;
/*
<Navbar className="Navigation navbar-light bg-light container-fluid">
			
							
				<Container>
				<div className="left">
							<Logo />
						</div>
				<img src={cropped} className="cropped" alt="cropped"/>	
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-navcontainer">
						
						<Nav className="ms-auto center hgt75">
							{navigationContent}
						</Nav>
					</Navbar.Collapse>
					<Info/>
					
				</Container>
			</Navbar>
*/
