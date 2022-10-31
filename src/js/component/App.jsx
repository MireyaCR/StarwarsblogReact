import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "../views/Home.jsx";
import Detail from "../views/Detail.jsx";


//create your first component


const App = () => {
	return (
		<div>
			<Navbar/>
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route path="/detail/:id" component={Detail} />
			</BrowserRouter>
			<Footer/>

		</div>
	);
};

export default App;
