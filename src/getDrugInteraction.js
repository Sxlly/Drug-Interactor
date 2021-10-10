import React, { Component, useState } from "react";
import axios from "axios";
import './getDrugInteractionCSS.css';



export default () => {

    //variables using this.state functionality
    const[rxcuiID, updateRxcuiID] = useState("");
    const[nameOne, updateNameOne] = useState("");
    const [nameTwo, updateNameTwo] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");
    const [loading, updateLoading] = useState("Loading...");
    const [InteractionsList, updateInteractionsList] = useState([]);
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

            console.log(getInteractionsData);

            updateInteractionCount(getInteractionsData.interactionTypeGroup[0].interactionType[0].interactionPair.length);


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

            </form>
        </div>

    );


};