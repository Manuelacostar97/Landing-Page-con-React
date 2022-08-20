import React from "react";

export const Navbar =(props) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-ligth">
            <a class="navbar-brand" href="#">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link disabled" href="#">About</a>
                <a class="nav-item nav-link disabled" href="#">Services</a>
                <a class="nav-item nav-link disabled" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};