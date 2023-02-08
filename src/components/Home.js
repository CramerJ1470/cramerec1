import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Banner from "./Banner";


const Home = () => {
	return (
		<>
			<Logo />
			<Banner />
		</>
	);
};

export default Home;

//{pictureArray.forEach((grouping) => {console.log(grouping); return <Slider grouping={grouping} />})}
