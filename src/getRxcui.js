import React, { Component, useState } from "react";
import axios from "axios";
import './getRxcuiCSS.css';


export default () => {

    const [loading, updateLoading] = useState(true);
    const [rxcuiID, updateRxcuiID] = useState(null);
    const [name, updateName] = useState("");
    const [search, updateSearch] = useState(1);

    function nameChange(enteredName) {
        updateName(enteredName);
    }

    const onSubmit = event => {
        event.preventDefault();


        (async () => {

            const url = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${name}&search=${search}`;
            const response = await fetch(url)
            const data = await response.json();

            console.log(data);
            
            
            if (data.idGroup.rxnormId !== undefined) {

                console.log(data.idGroup.rxnormId[0]);

                updateRxcuiID(data.idGroup.rxnormId[0]);
            }

            else {

                console.log("No matching Rxcui Id!");

                updateRxcuiID("No Match...");
            }


            

        })();

    }


    //return method
    return (

    <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
            <div className="container">
                <a href="#" className="navbar-brand">Drug<span className="text-primary">Interactor</span></a>

                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="navbar-collapse collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/HomePage">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Interaction Pair Tool</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-link" href="/getDrugInteraction">All Interactions Tool</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-link" href="/AllDrugTerms">All Drugs Tool</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-link" href="getRxcuiId">Rxcui ID Tool</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        <div className="page-section">
            <div className="container">
                <div className="card-service-large wow fadeInUp">
                    <form onSubmit={onSubmit}>

                        <h1 className="rxcui-header">Find Rxcui ID</h1>
                        <h2 className="rxcui-subheader">Enter drug name below</h2>

                        <input
                            className="rxcui-name-input"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Drug Name..."
                            value={name}
                            onChange={(event) => nameChange(event.target.value)}
                        />

                        <button type="submit" className="rxcui-find-btn">Find</button>

                        <div className="rxcui-answer-div">
                            <p className="rxcui-answer">ID: {rxcuiID}</p>
                        </div>
                    </form>


                </div>
            </div>
        </div>

    </div>

    );
};
