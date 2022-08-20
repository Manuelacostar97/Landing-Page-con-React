import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar.jsx"
import { Jumbotron } from "./Jumbotron.jsx"
import { Cards } from "./Cards.jsx"
import { Footer } from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
	<>
	<Navbar />
	<div className="container">
		<Jumbotron />
		<div className="d-flex">
		<Cards /> <Cards /> <Cards /> <Cards />
		</div>
	</div>
	<Footer />
	</>	
	);
};

export default Home;
