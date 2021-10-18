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
        return;
    }

    const onSubmit = event => {

        event.preventDefault();

        (async () => {

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
                        {
                            //map all drug terms individually from DrugTerms array and display on screen through HTML
                            drugTerms.map(Term => <div className="card-service-large-item">Term: {Term}</div>)
                        }
                    </div>

                    <button className="rxcui-find-btn" onClick={onSubmit}>Load Terms</button>

                </div>
            </div>







        </div>

    );
};
