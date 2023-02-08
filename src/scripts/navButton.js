function navOpen() {
	const open_btn = document.querySelector(".open-btn");
	console.log(open_btn);
	const close_btn = document.querySelector(".close-btn");
	const nav = document.querySelectorAll(".nav");
	open_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => nav_el.classList.add("visible"));
	});
	close_btn.addEventListener("click", () => {
		nav.forEach((nav_el) => nav_el.classList.remove("visible"));
	});
}

export {navOpen};
