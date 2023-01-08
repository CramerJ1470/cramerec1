
	function openup() {
          
		document.getElementById("tl").classList.add("upleftmove");
        document.getElementById("tr").classList.add("uprightmove");
        document.getElementById("bl").classList.add("downleftmove");
        document.getElementById("br").classList.add("downrightmove");
        document.getElementById("logo").style.filter = "drop-shadow(0 0 .5rem black)";
        document.getElementById("cropped").style.filter = "drop-shadow(0 0 3rem black)";
        let logo = document.getElementById("logo");
        logo.style.pointerEvents = "none";
        document.getElementById("logo").classList.add("logoup");
        let app = document.getElementsByTagName("body")[0];
        console.log(app);
        app.style.background = "url(assets/background1.jpg)";

        document.getElementById("cropped").classList.add("croppedup");
        
	}

    export default openup;


	

