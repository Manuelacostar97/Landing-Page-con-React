import React from "react";

export const Jumbotron = (props) => {
    return(
        <div className="py-4">
            <div className="jumbotron bg-light p-5">
                <h1 className="display-2">A Warm Welcome!</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim reprehenderit quae minus quas, sapiente unde modi? Cum nemo porro, officia quis odit ab tempora dolores mollitia ex unde itaque..</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        </div>    
    )
}