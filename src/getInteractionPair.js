import React, { Component, useState } from "react";
import './bootstrap.css';
import './theme.css';




export default () => {


    //variables using this.state functionality
    const[rxcuiIDOne, updateRxcuiIDOne] = useState("");
    const[rxcuiIDTwo, updateRxcuiIDTwo] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const[nameTwo, updateNameTwo] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const[loading, updateLoading] = useState("Loading...");
    const[interactionPair, updateInteractionPair] = useState([]);
    const[interationCount, updateInteractionCount] = useState(0);

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

        if (getRxcuiIDAPIOneData.idGroup.rxnormId || getRxcuiIDAPITwoData.idGroup.rxnormId == undefined) {

            console.log("No matching Rxcui Id!");
            updateRxcuiIDOne("No Match...");
            updateRxcuiIDTwo("No Match...");
        }

        else {

            var passableRxcuiOne = getRxcuiIDAPIOneData.idGroup.rxnormId[0];
            var passableRxcuiTwo = getRxcuiIDAPITwoData.idGroup.rxnormId[0];
        }

        return {
            passableRxcuiOne: passableRxcuiOne,
            passableRxcuiTwo: passableRxcuiTwo
        };


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
                        <form>
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
                        </form>
                    </div>
                </div>
            </div>
        




        </div>

    );
}