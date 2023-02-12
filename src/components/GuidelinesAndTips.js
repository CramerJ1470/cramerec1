import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";

const GuidelinesAndTips = () => {
	return (
		<>
			<div className="title1">Guidelines and Tips</div>

			<Logo />
			<Banner />
			<div className="blackbackground">
			<div className="scrolltip">
				<h2>
					TIPS FOR HOMEOWNERS THAT CAN LESSEN THE STRESS<br></br> OF A
					REMODELING PROJECT
				</h2>

				<div className="guideline">
					<p className="pl20">
						NYC/NARI encourages homeowners to work with their
						contractor to ensure smooth sailing during remodeling
						work. The homeowneer's role in the remodeling process
						doesn't end once a reputable professional has been
						hired. Simple steps initiated by the homeowner will
						lessen the stress of a remodeling project over the next
						few days, weeks or months.
					</p>
					<p className="pl20">
						NARI suggest the following tips to create a positive
						experience for the homeowner and the contractor
					</p>
					<span className="info">
						<div className="infocircle">
							<h1>1</h1>
						</div>
						<div className="rel">
							<h3 className="about">Plan Ahead</h3>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i><strong>
									  No Water or Power
									  </strong>
								</li>
							</ul>
							<p className="movedover">
								Know in advance if and when the workers plan to
								shut off your powwr and water.You can avoid food
								spoilage in the refrigerator/freezer. Also, be
								prepared by having a supply of bottled water on
								hand.
							</p>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i><strong>
									 Create a Phased List of Procedures
									 </strong>
								</li>
							</ul>
							<p className="movedover">
								Meet with the contractor and create a list of work to be done. Try to incorporate a chronological timeline so you'll know what phase of the project you can expext next.
							</p>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i><strong>
									 Make an Extra Key or Create a Temporary Security Code
									 </strong>
								</li>
							</ul>
							<p className="movedover">
								Depending on your schedule, there may be a need to share keys or opener/security codes with the contractor or workers. Keep track of any keys given out. If you give an opener or security door code, create a temporary code while the work is in progress. Once the work is complete, return to your regular code. Don't forget to ask who will take responsibility for any mishaps.
							</p>
						</div>
					</span>
					<span className="info">
						<div className="infocircle">
							<h1>2</h1>
						</div>
						<div className="rel">
						<h3 className="about">Double Check All Materials Upon Arrival</h3>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i>{" "}
									Is That The Right Color?
								</li>
							</ul>
							<p className="movedover">
								Once the cabinets, baseboards are installed, there's no turning back (or at least it can be very expensive to have to do so). Before workers start drilling, gluing, nailing, painting, etc. make sure the products you ordered matches the product that was delivered to your home- and don't just trust the box it came in. Open it! 
							</p>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i>
									'Don't Plan to Buy as You Go'
								</li>
							</ul>
							<p className="movedover">
								You can cut down last minute stressful decisions as well as material availability delays by selecting all materials with your contractor in advance.
							</p>
						</div>
					</span>
					<span className="info">
						<div className="infocircle">
							<h1>3</h1>
						</div>
						<div className="rel">
							<h3 className="about">Of Course</h3>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i>{" "}
									No Water or Power
								</li>
							</ul>
							<p className="movedover">
								We strive to exceed our clients' expectations.
								Each member of our team is chosen for their
								ability to serve every client and their home
								with the utmost respect and courtesy.
							</p>
						</div>
					</span>
					<span className="info">
						<div className="infocircle">
							<h1>4</h1>
						</div>
						<div className="rel">
							<h3 className="about">Not Done Yet</h3>
							<ul>
								<li>
									<i
										class="fa fa-caret-right"
										aria-hidden="true"
									></i>{" "}
									No Water or Power
								</li>
							</ul>
							<p className="movedover">
								We strive to exceed our clients' expectations.
								Each member of our team is chosen for their
								ability to serve every client and their home
								with the utmost respect and courtesy.
							</p>
						</div>
					</span>
				</div>
			</div>
			</div>
		</>
	);
};
export default GuidelinesAndTips;
