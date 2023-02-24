import React from "react";
const additionsFamily1 = require("../assets/additionsFamily1.jpg");

function AdditionsText() {
	return (
		<>
			<div>
				<div className="approach">
					<div>
						<h2>Add an Extension!</h2>
					</div>
					<p>
						At{" "}
						<strong className="bold">Cramer E Construction</strong>,
						we've done many many extensions. Some just the first
						floor, some two floors. Some with basements added. What
						is the reason for your project? More storage? Perhaps an
						entertainment space? A Master Suite? Maybe a larger
						Kitchen or Den? Maybe a space for MOm or Dad? or Both?
					</p>
				</div>
				<div >
                    <img className="sidepic" src={additionsFamily1} alt="additionsFamily" />
				</div>
			</div>
		</>
	);
}

export default AdditionsText;
