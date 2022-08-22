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
	<div className="container h-100">
		<Jumbotron  className="h-50"/>
		<div className="d-md-flex h-50">
		<Cards img="https://picsum.photos/id/237/500/325" title="Card 1" descriptions=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa pariatur aspernatur dolore laboriosam nemo blanditiis excepturi cumque. Fuga assumenda earum inventore dolor consequuntur, amet ea distinctio quasi facere sit! " />
		<Cards img="https://picsum.photos/id/232/500/325" title="Card 2" descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi perspiciatis asperiores obcaecati nostrum ipsa error, ipsam culpa, eveniet sit ipsum eius blanditiis aperiam. Consequuntur distinctio ipsum fugit voluptatem quisquam?"/> 
		<Cards img="https://picsum.photos/id/221/500/325" title="Card 3" descriptions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veritatis voluptatum iusto, officiis blanditiis temporibus hic! Dolorem laudantium perferendis, vitae reiciendis enim dignissimos tempora eos, odio iste dolor culpa incidunt!"/> 
		<Cards img="https://picsum.photos/id/210/500/325" title="Card 4" descriptions="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam repellendus aut facilis consequatur. Officiis illo ducimus nam enim soluta accusantium pariatur eius. Corrupti dolores quidem dolor iure corporis perspiciatis ex."/>  
		</div>
	</div>
	<Footer />
	</>	
	);
};

export default Home;


