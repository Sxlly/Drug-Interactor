import React, { Component, useState } from "react";
import axios from "axios";
import './getDrugInteractionCSS.css';
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";



export default () => {

    //variables using this.state functionality
    const[rxcuiID, updateRxcuiID] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const [interactionLoader, updateInteractionLoader] = useState(true);
    const [rxcuiIDLoader, updateRxcuiIDLoader] = useState(true);
    const [interactionCountLoader, updateInteractionCountLoader] = useState(true);
    const [interactionsList, updateInteractionsList] = useState([]);
    const [interactionCount, updateInteractionCount] = useState(0);

    //function to update nameOne state 
    function nameChangeOne(enteredName) {
        updateNameOne(enteredName);
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
            updateRxcuiIDLoader(true);

            var passableRxcui = getRxcuiIDData.idGroup.rxnormId[0];
            
        }

        else {

            console.log("No matching Rxcui Id!");
            updateRxcuiID("No Match...");
            updateRxcuiIDLoader(true);
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
            updateInteractionCountLoader(true);

            for (var index = 0; index < getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length-1; index++) {

                interactionsArray[index] = getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair[index];
                staticInteractionsList[index] = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                
            }

            updateInteractionsList(staticInteractionsList);
            updateInteractionLoader(true);


            return;
        }

        else {

            console.log("Did not progress!");
            updateInteractionLoader(true);
            return;
        }
    }

    //constant loading all interactions of drug method
    const loadingFunction = () => {

        if (interactionLoader == false) {

            return <ReactBootStrap.Spinner animation="border" style={{ color: "#2ecc71" }}  />;
        }

        else {

            return interactionsList.map(Interaction => <li className="interaction-item" key={Interaction}>{Interaction}</li>);

        }
    }

    //constant submit method
    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            updateInteractionLoader(false);
            updateInteractionCountLoader(false);
            updateRxcuiIDLoader(false);

            await getInteractionsMethod();
            console.log("Waited!");

        })();     
        
    }


    //return method
    return (

        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
                <div className="container">
                    <a href="/HomePage" className="navbar-brand">Drug<span className="text-primary">Interactor</span></a>

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
                                <a className="nav-link" href="/getRxcuiId">Rxcui ID Tool</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="page-section">
                <div className="container">
                    <div className="card-service-large wow fadeInUp">
                        <form  onSubmit={onSubmit}>
                            <h1 className="rxcui-header">Drug Interactions</h1>
                            <h2 className="rxcui-subheader">subheader</h2>

                            <input
                                className="rxcui-name-input"
                                id="nameOne"
                                name="name"
                                type="text"
                                placeholder="Enter Drug Name..."
                                value={nameOne}
                                onChange={(event) => nameChangeOne(event.target.value)}
                            />

                            <button type="submit" className="rxcui-find-btn">Find</button>

                            <p className="rxcui-answer">Rxcui ID: { rxcuiIDLoader ? rxcuiID : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color:"#2ecc71" }}/> }</p>
                            <p className="">{nameOne} Interacts With The Following</p>
                            <p className="">Total Number of Drugs {nameOne} Interacts With: { interactionCountLoader ? interactionCount : <ReactBootStrap.Spinner animation="border" size="sm" style={{ color:"#2ecc71"}}/> }</p>

                            {loadingFunction()}


                        </form>
                    </div>
                </div>
            </div>

        </div>

    );


};