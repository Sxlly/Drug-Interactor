import React, { Component, useState } from "react";
import axios from "axios";
import './getDrugInteractionCSS.css';
import './bootstrap.css';
import './theme.css';



export default () => {

    //variables using this.state functionality
    const[rxcuiID, updateRxcuiID] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const [nameTwo, updateNameTwo] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const [loading, updateLoading] = useState("Loading...");
    const [interactionsList, updateInteractionsList] = useState([]);
    const [interactionCount, updateInteractionCount] = useState(0);

    //function to update nameOne state 
    function nameChangeOne(enteredName) {
        updateNameOne(enteredName);
    };

    //function to update nameTwo state
    function nameChangeTwo(enteredName) {
        updateNameTwo(enteredName);
    };

    //asynchronus method to get rxcui ID of drug in search bar
    async function getRxcuiIDMethod() {

        const getRxcuiIDAPI = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameOne}&search=${search}`;
        const getRxcuiIDResponse = await fetch(getRxcuiIDAPI)
        const getRxcuiIDData = await getRxcuiIDResponse.json();

        console.log(getRxcuiIDData);

        if (getRxcuiIDData.idGroup.rxnormId !== undefined) {

            console.log(getRxcuiIDData.idGroup.rxnormId[0]);
            updateRxcuiID(getRxcuiIDData.idGroup.rxnormId[0]);

            var passableRxcui = getRxcuiIDData.idGroup.rxnormId[0];
            
        }

        else {

            console.log("No matching Rxcui Id!");
            updateRxcuiID("No Match...");
            return;
            
        }

        return passableRxcui;
    }

    //asynchronus method to get all interactions of drug in search bar
    async function getInteractionsMethod() {

        var rxcui = await getRxcuiIDMethod();

        if (rxcui !== undefined) {

            const getInteractionsAPI = `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}&sources=${source}`;
            const getInteractionsResponse = await fetch(getInteractionsAPI)
            const getInteractionsData = await getInteractionsResponse.json();
            
            const interactionsArray = [];
            const staticInteractionsList = [];

            console.log(interactionsArray);
            console.log(getInteractionsData);
            console.log(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);
            console.log(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair);

            updateInteractionCount(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);

            for (var index = 0; index < getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length-1; index++) {

                interactionsArray[index] = getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair[index];
                staticInteractionsList[index] = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                console.log(staticInteractionsList[index]);


            }

            updateInteractionsList(staticInteractionsList);


            return;
        }

        else {

            console.log("Did not progress!");
            return;
        }
    }

    //constant submit method
    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            await getInteractionsMethod();
            console.log("Waited!");

        })();     
        
    }


    //return method
    return (

        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
                    <div className="container">
                        <a href="#" className="navbar-brand">Drug<span className="text-primary">Interactor</span></a>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="navbar-collapse collapse" id="navbarContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">All Drugs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="page-banner home-banner">
                        <div className="row align-items-center flex-wrap-reverse h-100">
                            <div className="col-md-6 py-5 wow fadeInleft">
                                <h1 className="mb-4">Welcome to Drug Interactor!</h1>
                                <p className="text-lg text-grey mb-5">Take Substances Safely</p>
                                <a href="#" className="btn btn-primary btn-split">Dive In</a>
                            </div>
                            <div className="col-md-6 py-5 wow zoomIn">
                                <div className="img-fluid text-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/LSD_Structure.svg" alt="STRUCTURE" />
                                </div>
                            </div>
                        </div>
                        <a href="" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span> </a>
                    </div>
                </div>
            </header>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Drug Interactor</h5>
                                    <p>The online tool</p>
                                    <a href="" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        <div className="back-to-top"></div>
        <div className="main_div">

            <form className="form_main" onSubmit={onSubmit}>
                <h1 className="title">Drug Interaction</h1>

                <input
                    className="name_input"
                    id="nameOne"
                    name="name"
                    type="text"
                    placeholder="Enter Drug One Name..."
                    value={nameOne}
                    onChange={(event) => nameChangeOne(event.target.value)}
                />


                <button type="submit" className="find_btn">Find</button>

                <p className="rxcui_id">ID: {rxcuiID}</p>

                <p className="sentence_one">{nameOne} Interacts With The Following</p>
                
                <p className="sentence_two">Total Number of Drugs {nameOne} Interacts With: {interactionCount}</p>
                
                <ul className="interactions_list">
                    {
                        interactionsList.map(Interaction => <li className="interaction" key={Interaction}>{Interaction}</li>)
                    }
                </ul>

            </form>
        </div>
        </div>

    );


};