
import {BrowserRouter,Route} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "../views/Home.jsx";
import View from "../views/View.jsx";
import {myFetch} from "../api/myFetch.jsx";
import React, { useState,useEffect } from "react";
//create your first component


const App = () => {

	useEffect(()=>{
		myFetch().then(response=>{
			
			response.json()
		}).then(response=>{
	console.log(response)
			setPeople(response.result)
		},[])
	})

	const [people,setPeople]=useState([])

	return (
		<div>
			<Navbar/>
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route path="/detail:id" component={View} />
			</BrowserRouter>
			<Footer/>

		</div>
	);
};

export default App;
