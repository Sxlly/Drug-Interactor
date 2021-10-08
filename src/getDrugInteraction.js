import React, { Component, useState } from "react";
import axios from "axios";



export default () => {

    const[rxcuiID, updateRxcuiID] = useState(null);
    const[nameOne, updateNameOne] = useState("");
    const [nameTwo, updateNameTwo] = useState("");
    const[search, updateSearch] = useState(1);
    const[source, updateSource] = useState("DrugBank");


    function nameChangeOne(enteredName) {
        updateNameOne(enteredName);
    }

    function nameChangeTwo(enteredName) {
        updateNameTwo(enteredName);
    }

    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            const url = "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=88014&sources=ONCHigh";
            const response = await fetch(url)
            const data = await response.json();

            console.log(data);

            
        })();
    }





    //return method
    return (

        <div className="main_div">
            <form className="main_form" onSubmit={onSubmit}>
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
            </form>
        </div>

    );


};