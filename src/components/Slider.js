import React from "react";
import CarouselImages from "./CarouselImages";

const Slider = (beforeafters) => {
	//console.log(`Slider BA:`, beforeafters.beforeafters);
	let data = beforeafters.beforeafters;
	//console.log(data.beforeafters);

	let newData = data.beforeafters;

	return (
		<div className="carousel">
			
				<CarouselImages images={newData}/>
			
{/* 
			<div className="buttons-container">
				
				<button id="left" className="btn1">
					Prev
				</button>
				<button id="right" className="btn2">
					Next
				</button>
			</div> */}
		</div>
	);
	//  console.log(beforeafters1.g{et());
};

export default Slider;

/*
	      <div className="beforeAfter">
		<div className="before">
        <img src={grouping.before} alt="before"/>
        </div>    
        <div className="after">
		    <img src={grouping.after} alt="after"/>
	    </div>
        </div>
*/
// {newData.map((p) => (
// 	<>
// 		<Before
// 			key={p._id}
// 			srcbefore={p.srcbefore}
// 			alterb={p.alterb}
// 		/>
// 		<After
// 			key={p._id}
// 			srcafter={p.srcafter}
// 			altera={p.altera}
// 		/>
// 	</>
// ))}