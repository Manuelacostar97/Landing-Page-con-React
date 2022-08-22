import React from "react";

export const Cards = ({ title, descriptions, img }) => {
    return(
        <div className="p-2 justify-content-center text-center h-100">
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center"> {title} </h5>
                    <p className="card-text"> {descriptions} </p>
                    <button className="btn btn-primary justify-content-center text-center ">Find out more!</button>
                </div>
            </div>
        </div>   
    );
};