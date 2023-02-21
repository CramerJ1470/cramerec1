import { render } from "@testing-library/react";
import React from "react";
import { Nav } from "react-bootstrap";
import Navigation from "./Navigation";

let navOpenPlease = false;

const NavbarToggled = (navOpenPlease) => {
	const open_btn = document.querySelector(".open-btn");
	console.log(open_btn);
	const close_btn = document.querySelector(".close-btn")[0];
	const nav = document.querySelectorAll(".nav");
	open_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => nav_el.classList.add("visible"));
	});
	close_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => nav_el.classList.remove("visible"));
	});

	return (
		<>
			<button className="nav-btn open-btn" onClick={navOpen}>
				<i className="fas fa-bars"></i>
			</button>
			<Navigation navOpenPlease={navOpenPlease} />
		</>
	);
};

export default NavbarToggled;

/*
<div class="nav nav-black">
				<div class="nav nav-red">
					<div class="nav nav-white">
						<button class="nav-btn close-btn">
							<i class="fas fa-times"></i>
						</button>

						<ul class="list">
							<li>
								<Nav.Link
									className="linkText shadow1"
									href="/home"
								>
									Home
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									className="linkText shadow1"
									href="/aboutus"
								>
									About Us
								</Nav.Link>
							</li>
							<li>
								<Nav.Link
									className="linkText shadow1"
									href="/ourwork"
								>
									Our Work
								</Nav.Link>
							</li>
							<li>
								<ul>
									<li>
										<Nav.Link
											className="linkText shadow1"
											href="/products"
										>
											Products
										</Nav.Link>
									</li>
									<li>
										<Nav.Link
											className="linkText shadow1"
											href="/guidelinesandtips"
										>
											Guidelines and Tips
										</Nav.Link>
									</li>
									<li>
										<Nav.Link
											className="linkText shadow1"
											href="/contactus"
										>
											Contact Us
										</Nav.Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>

			const open_btn = document.querySelector(".open-btn");
	console.log(open_btn);
	const close_btn = document.querySelector(".close-btn")[0];
	const nav = document.querySelectorAll(".nav");
	open_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => nav_el.classList.add("visible"));
	});
	close_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => nav_el.classList.remove("visible"));
	});
			*/
