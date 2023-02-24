import React, { useState } from "react";
import Logo from "./Logo";
import Banner from "./Banner";

const FORM_ENDPOINT = ""; 


const ContactUs = () => {
const [submitted, setSubmitted] = useState(false);
const handleSubmit = () => {
  setTimeout(() => {
	setSubmitted(true);
  }, 100);
};

if (submitted) {
  return (
	<div>
		<div className="py-6">
	  <div className="text-2xl">Thank you!</div>
	  <div className="text-md">We'll be in touch soon.</div>
	</div>
	</div>
  );
}

return (
	<>
	
	<span className="disp">
	
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
	<div className="mb-3 pt-0">
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
