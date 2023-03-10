// import {createRoot} from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter as Router } from "react-router-dom";
// import React from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
	,
	document.getElementById("root")
	
);

// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
// 	<React.StrictMode>
// 		<Router>
// 			<App tab="home" />
// 		</Router>
// 	</React.StrictMode>,
	 
// );