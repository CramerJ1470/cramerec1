import React from "react";
import Banner from "./Banner";
import Logo from "./Logo";
import { Navbar, Nav, Container } from "react-bootstrap";

const AboutUs = ({ bathrooms }) => {
	return (
		<>
			{" "}
			<span className="disp">
				<div className="title1">Our Work</div>
				<Logo />
				<Banner />
			</span>
			<div>
				<div className="ourworkbody">
					<p className="headp1">Remodeling Services</p>
					<span className="sidebyside">
						<img
							src="https://live.staticflickr.com/65535/52667463351_339a7397a1_w.jpg"
							alt="nhpsak"
						/>
						<img
							src="https://live.staticflickr.com/65535/52667970788_8fd6c3be62_w.jpg"
							alt="nhparu"
						/>
						<img
							src="https://live.staticflickr.com/65535/52685230507_b26bfc656a_n.jpg"
							alt="beth"
						/>
						{/* <img
							src="https://live.staticflickr.com/65535/52668032940_cd4bb5c13c_n.jpg"
							alt="beth"
						/> */}
					</span>
					<div className="down">
						<p className="ourworkbody1">
							We specialize in tranforming and enhancing existing
							fine homes into even more beautiful and functional
							living spaces. Whether your needs involve and
							interior renovation, a room addition or en entirely
							new floor plan, our team can make it happen.
						</p>
						<p className="ourworkbody1">
							We also offer full preliminary design capabilities
							and will walk you through an extensive planning and
							budget process before every project, so there won't
							be surprises or hidden costs.
						</p>
						<p className="ourworkbody1">
							Some of the projects we specialize in include:
						</p>
					</div>
					<span className="sidebyside1">
						<ul className="doublelist">
							<li>
								<a className="worklinks" href="/additions">
									Additions
								</a>
							</li>
							<li>
								<a className="worklinks" href="/kitchens">
									Kitchens
								</a>
							</li>
							<li>
								<a className="worklinks" href="/baths">
									Baths
								</a>
							</li>
							<li>
								<a className="worklinks" href="/basements">
									Basements
								</a>
							</li>
						</ul>
						<ul className="doublelist">
							<li>
								<a className="worklinks" href="/dormers">
									Dormers
								</a>
							</li>
							<li>
								<a className="worklinks" href="/interiors">
									Interiors
								</a>
							</li>
							<li>
								<a className="worklinks" href="/exteriors">
									Exteriors
								</a>
							</li>
							<li>
								<a className="worklinks" href="/uniquefeatures">
									Unique Features
								</a>
							</li>
						</ul>
					</span>
					<p className="headp">Preliminary Design & Build</p>
					<p className="ourworkbody1">
						Preliminary Design & Build is an industry phase that
						simply means we can handle coordinating every aspect of
						your project from the very beginning to the very end.
						<p>
							If you are creating an addition, remodeling kitchens
							and baths, or customizing a lower level space - we
							can handle all the design work for you. We'll
							literally go to the drawing board, figure out the
							dimensions, and draw up preliminary plans. Along the
							way, we'll help coordinate filing all the necessary
							permits required by the township if necessary.
						</p>
					</p>
					<span className="sidebyside">
						<img
							className="prelim"
							src="https://live.staticflickr.com/65535/52667768229_f810487b81_n.jpg"
							alt="ParksideAfter"
						/>

						<img
							className="prelim"
							src="https://live.staticflickr.com/65535/52667887089_1135049b09_n.jpg"
							alt="croydenAfter"
						/>

						<img
							className="prelim1"
							src="https://live.staticflickr.com/65535/52666980032_a2a57761fc_n.jpg"
							alt="LeeInt"
							label="designed by Cramer"
						/>
					</span>
					<p className="ourworkbody1 below">
						******(3) Projects shown above designed by Cramer E
						Construction LLC only (consulting)
					</p>
					<p className="ourworkbody1">
						Working on a Preliminary Design & Build project with us
						has severl advantages. Because we're involved from the
						beginning, there will be fewer unexpected costs.We'll
						conduct a feasibility study and provide practical input
						from a builder's perspective. Perhaps the main advantage
						is that we're the only firm you need to work with, and
						you can rest assured that we'll take care of every
						detail.
					</p>
					<p className="ourworkbody1">
						If you are working on a major remodel and already have
						plans, we can work with your architect. We work in
						conjunction with several of the leading architects in{" "}
						<strong>Nassau</strong> and <strong>Suffolk</strong>{" "}
						counties.
					</p>
					<p className="ourworkbody1">
						Whether we coordinate the design ourselves or work with
						your architect, we always work to ensure that the
						customer vision is achieved and the target budget is not
						exceeded.
					</p>
					<p className="ourworkbody1">
						Project after project, clients indicate their
						pleasurable experience, their satisfaction, and their
						belief that they have partnered with professionals they
						can trust.
					</p>
					<p className="ourworkbody1">Thank You for stopping by!</p>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
