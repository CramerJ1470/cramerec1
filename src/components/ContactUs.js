import React, { useState } from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import { Navigate } from "react-router-dom";

const FORM_ENDPOINT = "";

const ContactUs = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = (e) => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
		var mailBody = document.getElementById("message").value;
		window.location =
			"mailto:john@cramerec.com?subject=ContactForm&body=" + mailBody;
		alert("Thank You!");
		alert("We will be in touch soon.");
		let info = document.getElementsByClassName("mb-3");
		for (let x = 0; x < info.length; x++) {
			if (info[x].getElementsByTagName("input")) {
				info[x].getElementsByTagName("input")[0].value = "";
			}
			document.getElementById("message").value = "";
		}

		// info.forEach(x => x.value= "");
	};

	// if (submitted) {
	//   return (
	// 	<div>
	// 		<div className="py-6">
	// 	  <div className="text-2xl">Thank you!</div>
	// 	  <div className="text-md">We'll be in touch soon.</div>
	// 	</div>
	// 	</div>
	//   );
	// }

	return (
		<>
			<span className="disp">
			<div className="title1">Contact Us</div>
				<Logo />
				<Banner />
			</span>
			<div className="py-6">
				<div className="contactForm">
					<form
						action={FORM_ENDPOINT}
						onSubmit={handleSubmit}
						method="POST"
						target="_blank"
					>
						<div id="topInput" className="mb-3 pt-0">
							<input
								type="text"
								placeholder="Your name"
								name="name"
								className="px-3 py-3 placeholder-white text-slate-600 relative bg-white bg-gray-400 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
								required
							/>
						</div>
						<div className="mb-3 pt-5">
							<input
								type="email"
								placeholder="Email"
								name="email"
								className="px-3 py-3 placeholder-white text-slate-600 relative bg-white bg-gray-400 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
								required
							/>
						</div>
						<div className="mb-3 pt-5">
							<textarea
								placeholder="Your message"
								name="message"
								id="message"
								className="px-3 py-3 placeholder-white text-slate-600 relative bg-white bg-gray-400 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
								required
							/>
						</div>
						<div className="mb-3 pt-5 ">
							<button
								className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="submit"
							>
								Send a message
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
