import React, { Component, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";



export default () => {

    const[drugTerms, updateDrugTerms] = useState([]);
    const [termsLoader, updateTermsLoader] = useState(true);

    async function getDrugTerms() {

        const getDrugTermsAPI = `https://rxnav.nlm.nih.gov/REST/displaynames.json`;
        const getDrugTermsResponse = await fetch(getDrugTermsAPI)
        const getDrugTermsData = await getDrugTermsResponse.json();

        console.log(getDrugTermsData);

        const termsArray = [];

        for (var index = 0; index < getDrugTermsData.displayTermsList.term.length-1; index++) {

            termsArray[index] = getDrugTermsData.displayTermsList.term[index];
            console.log(termsArray[index]);
        }

        updateDrugTerms(termsArray);
        updateTermsLoader(true);
        return;
    }


    const loadingFunction = () => {

        if (termsLoader == false) {

            return <ReactBootStrap.Spinner animation="border" style={{ color: "#2ecc71" }} />;
        }

        else {

            return drugTerms.map(Term => <li className="interaction-item" key={Term}>{Term}</li>);
        }
    }

    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            updateTermsLoader(false);

            await getDrugTerms();
            console.log("Waited!");
        })();
    }


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

                        <h1 className="drug-terms-header">List of all Drug Names</h1>
                        <h2 className="drug-terms-subheader">Total Number Of Drug Terms: {drugTerms.length}</h2>
                        {loadingFunction()}
                    </div>

                    <button className="btn btn-primary" onClick={onSubmit}>Load Terms</button>

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
