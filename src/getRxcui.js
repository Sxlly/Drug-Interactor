import React, { Component, useState } from "react";
import axios from "axios";
import './getRxcuiCSS.css';
import * as ReactBootStrap from "react-bootstrap";


export default () => {

    const [rxcuiIDLoader, updateRxcuiIDLoader] = useState(true);
    const [rxcuiID, updateRxcuiID] = useState(null);
    const [name, updateName] = useState("");
    const [search, updateSearch] = useState(1);
    const [show, updateShow] = useState(false);

    function nameChange(enteredName) {
        updateName(enteredName);
    }

    const alertMethod = () => {

        if (show == true) {

            return (

                <ReactBootStrap.Alert variant="danger">
                    One or more drug names do not exist within current drug terms records...
                </ReactBootStrap.Alert>

            );
        }
    }

    const onSubmit = event => {

        event.preventDefault();

        updateRxcuiIDLoader(false);
        updateShow(false);


        (async () => {

            const url = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${name}&search=${search}`;
            const response = await fetch(url)
            const data = await response.json();

            console.log(data);
            
            
            if (data.idGroup.rxnormId !== undefined) {

                console.log(data.idGroup.rxnormId[0]);

                updateRxcuiID(data.idGroup.rxnormId[0]);
                updateRxcuiIDLoader(true);
            }

            else {

                console.log("No matching Rxcui Id!");

                updateRxcuiID("No Match...");
                updateRxcuiIDLoader(true);
                updateShow(true);
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
                            <a className="nav-link" href="/getInteractionPair">Interaction Pair Tool</a>
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
                        <li className="nav-link">
                            <a className="nav-link" href="/drug3dtest">Molecule View Tool</a>
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

                        <button type="submit" className="btn btn-primary">Find</button>

                        <div className="rxcui-answer-div">
                            {alertMethod()}
                            <p className="rxcui-answer">Rxcui ID: {rxcuiIDLoader ? rxcuiID : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color: "#2ecc71" }}/> }</p>
                        </div>
                    </form>


                </div>
            </div>
        </div>


        <footer className="page-footer bg-image">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-3 py-3">
                            <h3>Drug Interactor</h3>
                            <p>Take substances safely</p>
                            <p>Medical Grade Information provided by DrugBank Official Research Records</p>
                            <p>Creator: Shae Sullivan</p>
                        </div>
                    </div>
                </div>
            </footer>

    </div>

    );
};
