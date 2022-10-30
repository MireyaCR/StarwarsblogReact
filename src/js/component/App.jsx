import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import People from "../views/People.jsx";
import PeopleDetail from "../views/PeopleDetail.jsx";


//create your first component


const App = () => {
	return (
		<div>
			<Navbar/>
			<BrowserRouter>
				<Route exact path="/" component={People} />
				<Route path="/detail:id" component={PeopleDetail} />
			</BrowserRouter>
			<Footer/>

		</div>
	);
};

export default App;
