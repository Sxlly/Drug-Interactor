import React, { Component, useState } from "react";
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";




export default () => {


    //variables using this.state functionality
    const[rxcuiIDOne, updateRxcuiIDOne] = useState("");
    const[rxcuiIDTwo, updateRxcuiIDTwo] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const[nameTwo, updateNameTwo] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const[interactionResultLoader, updateInteractionResultLoader] = useState(true);
    const[interactionDescLoader, updateInteractionDescLoader] = useState(true);
    const[rxcuiIDOneLoader, updateRxcuiIDOneLoader] = useState(true);
    const[rxcuiIDTwoLoader, updateRxcuiIDTwoLoader] = useState(true);
    const[interationCount, updateInteractionCount] = useState(0);
    const[interactionResult, updateInteractionResult] = useState("");
    const[interactionsList, updateInteractionsList] = useState([]);
    const[interactionDescription, updateInteractionDescription] = useState("");
    const[show, updateShow] = useState(false);

    //function to update nameOne state
    function nameChangeOne(enteredName) {
        updateNameOne(enteredName);
    };

    //function to update nameTwo state
    function nameChangeTwo(enteredName) {
        updateNameTwo(enteredName);
    };

    //asynchronus method to get rxcui Id of drugs One and Two
    async function getRxcuiIdMethod() {

        const getRxcuiIDAPIOne = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameOne}&search=${search}`;
        const getRxcuiIDAPIOneResponse = await fetch(getRxcuiIDAPIOne)
        const getRxcuiIDAPIOneData = await getRxcuiIDAPIOneResponse.json();

        console.log(getRxcuiIDAPIOneData);

        const getRxcuiIDAPITwo = `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${nameTwo}&search=${search}`;
        const getRxcuiIDAPITwoResponse = await fetch(getRxcuiIDAPITwo)
        const getRxcuiIDAPITwoData = await getRxcuiIDAPITwoResponse.json();

        console.log(getRxcuiIDAPITwoData);

        if (getRxcuiIDAPIOneData.idGroup.rxnormId && getRxcuiIDAPITwoData.idGroup.rxnormId !== undefined) {

            var passableRxcuiOne = getRxcuiIDAPIOneData.idGroup.rxnormId[0];
            var passableRxcuiTwo = getRxcuiIDAPITwoData.idGroup.rxnormId[0];
            var passableNameOne = getRxcuiIDAPIOneData.idGroup.name.toLowerCase();
            var passableNameTwo = getRxcuiIDAPITwoData.idGroup.name.toLowerCase();
            updateRxcuiIDOne(passableRxcuiOne);
            updateRxcuiIDTwo(passableRxcuiTwo);
            updateRxcuiIDOneLoader(true);
            updateRxcuiIDTwoLoader(true);
        }

        else if (getRxcuiIDAPIOneData.idGroup.rxnormId || getRxcuiIDAPITwoData.idGroup.rxnormId !== undefined) {

            console.log("1/2 No Matching Rxcui ID...")
            
            if (getRxcuiIDAPIOneData.idGroup.rxnormId !== undefined) {

                updateRxcuiIDOne(getRxcuiIDAPIOneData.idGroup.rxnormId[0]);
                updateRxcuiIDTwo("No Match...");
                updateRxcuiIDOneLoader(true);
                updateRxcuiIDTwoLoader(true);

            }

            else {

                updateRxcuiIDTwo(getRxcuiIDAPITwoData.idGroup.rxnormId[0]);
                updateRxcuiIDOne("No Match...");
                updateRxcuiIDOneLoader(true);
                updateRxcuiIDTwoLoader(true);

            }

            var passableRxcuiOne = null;
            var passableRxcuiTwo = null;
            var passableNameOne = null;
            var passableNameTwo = null;

            
        }

        else {

            
            console.log("No matching Rxcui Id!");
            updateRxcuiIDOne("No Match...");
            updateRxcuiIDTwo("No Match...");
            updateRxcuiIDOneLoader(true);
            updateRxcuiIDTwoLoader(true);
            alert("Both drugs do not exist within database records...");
            var passableRxcuiOne = null;
            var passableRxcuiTwo = null;
            var passableNameOne = null;
            var passableNameTwo = null;
        }

        return {
            passableRxcuiOne: passableRxcuiOne,
            passableRxcuiTwo: passableRxcuiTwo,
            passableNameOne: passableNameOne,
            passableNameTwo: passableNameTwo
        };

    }

    //asynchronus method to get determine if pair of substaces interact
    async function getInteractionMethod() {

        var rxcui = await getRxcuiIdMethod();
        var rxcuiOne = rxcui.passableRxcuiOne;
        var rxcuiTwo = rxcui.passableRxcuiTwo;
        var drugNameOne = rxcui.passableNameOne;
        var drugNameTwo = rxcui.passableNameTwo;

        if (rxcuiOne && rxcuiTwo !== null) {

            const getInteractionsAPI = `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcuiOne}&sources=${source}`;
            const getInteractionsResponse = await fetch(getInteractionsAPI)
            const getInteractionsData = await getInteractionsResponse.json();

            console.log(getInteractionsData);


            const interactionsArray = [];
            const staticInteractionsList = [];

            updateInteractionCount(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);


            for (var index = 0; index < getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length-1; index++) {

                interactionsArray[index] = getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair[index];
                staticInteractionsList[index] = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                
                var leadInteractionName = interactionsArray[index].interactionConcept[0].minConceptItem.name;
                var leadInteractionRxcui = interactionsArray[index].interactionConcept[0].minConceptItem.rxcui;
                var altInteractionName = interactionsArray[index].interactionConcept[1].minConceptItem.name;
                var altInteractionRxcui = interactionsArray[index].interactionConcept[1].minConceptItem.rxcui;
                var interactionDesc = interactionsArray[index].description;


                console.log("Lead Name: " + leadInteractionName);
                console.log("Lead Rxcui: " + leadInteractionRxcui);
                console.log("Alt Name: " + altInteractionName);
                console.log("Alt Rxcui: " + altInteractionRxcui);
                console.log("Description: " + interactionDesc);

                if (altInteractionName == drugNameTwo) {

                    updateInteractionResult("Yes!");
                    updateInteractionsList(staticInteractionsList);
                    updateInteractionDescription(interactionDesc);
                    updateInteractionResultLoader(true);
                    updateInteractionDescLoader(true);
                    return;
                }

                if (altInteractionRxcui == rxcuiTwo) {

                    updateInteractionResult("Yes!");
                    updateInteractionsList(staticInteractionsList);
                    updateInteractionDescription(interactionDesc);
                    updateInteractionResultLoader(true);
                    updateInteractionDescLoader(true);
                    return;
                }

                else {

                    updateInteractionResult("No!");
                    updateInteractionDescription("None...");
                    updateInteractionResultLoader(true);
                    updateInteractionDescLoader(true);
                }

                
            }

            updateInteractionsList(staticInteractionsList);
            return;
        }
        else {

            console.log("Did not progress!");
            return;
        }     
    }


    const alertMethod = () => {

        if (show == true) {

            return (

                <ReactBootStrap.Alert variant="danger" onClose={() => updateShow(false)} dismissible>
                    <ReactBootStrap.Alert.Heading>Error!</ReactBootStrap.Alert.Heading>
                    <p>You faced an error!</p>
                </ReactBootStrap.Alert>

            );

        }
    }


    //constant submit method
    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            updateInteractionResultLoader(false);
            updateInteractionDescLoader(false);
            updateRxcuiIDOneLoader(false);
            updateRxcuiIDTwoLoader(false);


            await getInteractionMethod();
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
                            <h1 className="rxcui-header">Interaction Pair</h1>
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

                            <input
                                className="rxcui-name-input"
                                id="nameTwo"
                                name="nameTwo"
                                type="text"
                                placeholder="Enter Drug Name..."
                                value={nameTwo}
                                onChange={(event) => nameChangeTwo(event.target.value)}
                            />

                            <button type="submit" className="rxcui-find-btn">Test</button>

                            <div className="card-service-large wow fadeInUp">

                                {alertMethod()}

                                <p className="rxcui-answer">Rxcui ID One: {rxcuiIDOneLoader ? rxcuiIDOne : <ReactBootStrap.Spinner animation="border" size="sm" />}</p>
                                <p className="rxcui-answer">Rxcui ID Two: {rxcuiIDTwoLoader ? rxcuiIDTwo : <ReactBootStrap.Spinner animation="border" size="sm" />}</p>



                                <input type="checkbox" className="interaction-readmore-state" id="interaction-readmore" />
                                <ul className="interaction-readmore-wrap">
                                    <li className="interaction-answer">Interaction: {interactionResultLoader ? interactionResult : <ReactBootStrap.Spinner animation="border" size="sm" />}</li>
                                    <li className="interaction-readmore-target">Description: {interactionDescLoader ? interactionDescription : <ReactBootStrap.Spinner animation="border" size="sm" />}</li>
                                </ul>

                                <label for="interaction-readmore" className="interaction-readmore-trigger"></label>
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
}