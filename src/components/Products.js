import React from "react";
import Banner from "./Banner";
import Logo from "./Logo";
import SeeOurWork from "./SeeOurWork";
const owensCorning = require("../assets/owens.png");

const Products = () => {
	return (
		<>
			<span className="disp">
				<div className="title1">Products</div>
				<Logo />
				<Banner />
			</span>
			<div className="products">
				<img
					src="https://findlogovector.com/wp-content/uploads/2019/12/andersen-windows-and-doors-logo-vector.png"
					alter="andersen windows logo"
				/>
				<img
					src="https://diamondbuildings.com/wp-content/uploads/2020/01/certainteed-logo.png"
					alter="Certainteed logo"
				/>
				<img
					src="https://empowerexteriors.com/wp-content/uploads/2020/12/james-hardie-logo1200x900-copy-1-768x406.png"
					alter="James Hardie logo"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/2/21/Boise_Cascade_logo.svg"
					alter="Boise Cascade logo"
				/>
				<img
					src="https://bpi.build/webres/Image/vendor_logos/DuPont_Tyvek_BRAND_rgb.png"
					alter="Tyvek logo"
				/>
				<img
					src="https://www.strongtie.com/_ui/images/sst-logo.png"
					alter="Simpson logo"
				/>
				<img
					src="https://jbwholesale.com/wp-content/uploads/2017/02/GAF-Logo-PNG.png"
					alter="Simpson logo"
				/>
				<img src={owensCorning} alter="Mohawk logo"/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mohawk_Industries_logo.svg/2560px-Mohawk_Industries_logo.svg.png"
					alter="Mohawk logo"
				/>
			</div>
		</>
	);
};

export default Products;
