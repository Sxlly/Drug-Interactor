import React, { Component, useState } from "react";
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";



export default () => {

    const [url, updateUrl] = useState("");


    async function get3dStructure() {

        const getStructureAPI = "http://cactus.nci.nih.gov/chemical/structure/aspirin/image";
        const getStructureAPIResponse = await fetch(getStructureAPI)
        const getStructureAPIData = await getStructureAPIResponse;

        console.log(getStructureAPIData);
        updateUrl(getStructureAPIData.url);
    }

    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            await get3dStructure();
            console.log("Waited!");

        })();
    }



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
                                    <a className="nav-link" href="/getInteractionPair">Interaction Pair Tool</a>
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
                                <li className="nav-link">
                                    <a className="nav-link" href="/drug3dtest">3D Structure Tool</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            <button onClick={onSubmit}>Test</button>

            <div >

                <img src={url} height="500" width="500" />

            </div>
        </div>

    );
}