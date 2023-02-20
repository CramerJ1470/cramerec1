import React from "react";
import PageCarouselImages from "./PageCarouselImages";

const PanelSlider = ({panelinfo}) => {
	//console.log(`Slider BA:`, beforeafters.beforeafters);
	
    console.log(`panelinfo:`,panelinfo);
	//console.log(data.beforeafters);

	
   
	return (
		<div className="carousel">
			
            <PageCarouselImages panelinfo={panelinfo}/>
			

			<div className="buttons-container">
				
				<button id="left" className="btn1">
					Prev
				</button>
				<button id="right" className="btn2">
					Next
				</button>
			</div>
		</div>
	);
	//  console.log(beforeafters1.g{et());
};

export default PanelSlider;