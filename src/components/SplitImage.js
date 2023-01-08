import { Nav } from "react-bootstrap";
import pic from "../assets/background1.jpg";
import Logo from "./Logo";
import nhpstl from "../assets/NHPStl.png";
import nhpstr from "../assets/NHPStr.png";
import nhpsbl from "../assets/NHPSbl.png";
import nhpsbr from "../assets/NHPSbr.png";
import cropped from "../assets/cropped.jpg";


const SplitImage = () => {

 
    
	return (
		<>
			<div className="grid startbox">
				<Logo />
				<img src={nhpstl}
					alt="nhpstl"
					id="tl"
					className="grid-item element upleft"
				></img>
				<img src={nhpstr}
					alt="nhpstr"
					id="tr"
					className="grid-item element upright"
				></img>
				<img src={nhpsbl}
					alt="nhpsbl"
					id="bl"
					className="grid-item element downleft"
				></img>
				<img src={nhpsbr}
					alt="nhpsbr"
					id="br"
					className="grid-item element downright"
				></img>
				
			</div>
			
			<img src={cropped} id="cropped" className="banner cropped" alt="cropped"/>
			
			
			
		</>
	);
};

export default SplitImage;
