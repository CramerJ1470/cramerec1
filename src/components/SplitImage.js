import { Nav } from "react-bootstrap";
import pic from "../assets/background1.jpg";
import Logo from "./Logo";
import Navbar1 from "./Navbar1";
import nhpstl from "../assets/NHPStl.png";
import nhpstr from "../assets/NHPStr.png";
import nhpsbl from "../assets/NHPSbl.png";
import nhpsbr from "../assets/NHPSbr.png";
import cropped from "../assets/cropped.jpg";
import { openup, movedon } from "./logo1.js";
import Navigation from "./Navigation";


const SplitImage = (firsttime) => {
	 
	return (
		<>
		 
			
			<div className="trim">
				<div className="grid-container startbox">
					<div className="clicklogo shadow1 center picbox">
						Click Logo<br></br>to Enter
					</div>

					<Logo />
					<div className="images">
						<img
							src={nhpstl}
							alt="nhpstl"
							id="tl"
							className="grid-item element upleft"
						></img>
						<img
							src={nhpstr}
							alt="nhpstr"
							id="tr"
							className="grid-item element upright"
						></img>
						<img
							src={nhpsbl}
							alt="nhpsbl"
							id="bl"
							className="grid-item element downleft"
						></img>
						<img
							src={nhpsbr}
							alt="nhpsbr"
							id="br"
							className="grid-item element downright"
						></img>
					</div>
				</div>

				<img
					src={cropped}
					id="cropped"
					className="banner cropped"
					alt="cropped"
				/>
			</div>
		</>
	);
	 
};

export default SplitImage;
