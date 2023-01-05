import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./Logo";
import Info from "./Info";
import cropped from "../assets/cropped.jpg";

const Navigation = () => {
	
	let navigationContent = (
		<>
			<Nav.Link className="linkText shadow1" href="/home">
				Home
			</Nav.Link>
			<Nav.Link className="linkText shadow1" href="/aboutus">
				About Us
			</Nav.Link>
			<Nav.Link className="linkText shadow1" href="/ourwork">
				Our Work
			</Nav.Link>
			<Nav.Link className="linkText shadow1" href="/products">
				Products
			</Nav.Link>

			<Nav.Link className="linkText shadow1" href="/guidelinesandtips">
				Guidelines and Tips
			</Nav.Link>

			<Nav.Link className="linkText shadow1" href="/contactus">
				Contact Us
			</Nav.Link>
		</>
	);

	return (
		<>
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
		</>
	);
};
export default Navigation;
