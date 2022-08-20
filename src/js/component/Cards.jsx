import React from "react";

export const Cards = ({ title, descriptions, img }) => {
    return(
        <div class="p-2 justify-content-center text-center h-50 lg">
            <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title text-center"> {title} </h5>
                    <p class="card-text"> {descriptions} </p>
                    <button class="btn btn-primary justify-content-center text-center ">Find out more!</button>
                </div>
            </div>
        </div>   
    );
};