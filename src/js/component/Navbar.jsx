import React from "react";

export const Navbar =(props) => {
    return(
        <nav class="navbar navbar-expand-md navbar-dark bg-dark text-ligth justify-content-between">
            <div className="container">
                <a class="navbar-brand" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="w-75"></div>
            
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
            </div>   
        </nav>
    );
};
                    