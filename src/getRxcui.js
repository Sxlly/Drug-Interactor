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

        <div className="main_div">
            <form className="main_form" onSubmit={onSubmit}>
                <h1 className="title">Find Rxcui Id</h1>

                <input
                    className="name_input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Drug Name..."
                    value={name}
                    onChange={(event) => nameChange(event.target.value)}
                />
                <button type="submit" className="find_btn">Find</button>

                
                <div className="rxcui_div">
                    <p className="rxcui_id">ID: {rxcuiID}</p>
                </div>
                


            </form>
        </div>
    );
};
