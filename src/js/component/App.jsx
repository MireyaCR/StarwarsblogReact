import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
//create your first component
const App = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<BrowserRouter>
				<Route path="/"component={Home}/>
				<Route></Route>
			</BrowserRouter>
			<Footer/>

		</div>
	);
};

export default App;
