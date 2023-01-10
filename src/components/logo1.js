let movedon = false;
function openup() {
	document.getElementById("tl").classList.add("upleftmove");
	document.getElementById("tr").classList.add("uprightmove");
	document.getElementById("bl").classList.add("downleftmove");
	document.getElementById("br").classList.add("downrightmove");
	document.getElementById("logo").style.filter =
		"drop-shadow(0 0 .5rem black)";
	document.getElementById("cropped").style.filter =
		"drop-shadow(0 0 3rem black)";
	let logo = document.getElementById("logo");
	logo.style.pointerEvents = "none";
	document.getElementById("logo").classList.add("logoup");
	let app = document.getElementsByClassName("startbox")[0];
	console.log(app);
	app.classList.add("background1");
	document.getElementById("cropped").classList.add("croppedup");
	movedon = true;
	document.getElementsByClassName("clicklogo")[0].innerText = "";
}

export { openup, movedon };
