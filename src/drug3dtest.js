import React, { Component, useState } from "react";
import './bootstrap.css';
import './theme.css';
import * as ReactBootStrap from "react-bootstrap";

//Material UI Imports
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


export default () => {

    //variables using this.state functionality
    const[nameOne, updateNameOne] = useState("");
    const[moleculeImage, updateMoleculeImage] = useState("");
    const[moleculeImageAlert, updateMoleculeImageAlert] = useState(false);
    const[moleculeImageLoader, updateMoleculeImageLoader] = useState(true);




    //function to update nameOne state(value)
    function nameChangeOne(enteredName) {

        updateNameOne(enteredName);
    };

    //asynchronus function to get 2D Molecule Structure from API call => cactus database
    async function getMoleculeStructure() {

        const getMolecule = `http://cactus.nci.nih.gov/chemical/structure/${nameOne.toLowerCase()}/image`;
        const getMoleculeResponse = await fetch(getMolecule);
        const getMoleculeData = await getMoleculeResponse;

        updateMoleculeImage(getMoleculeData.url);

        if (getMoleculeData.ok == false) {

            updateMoleculeImageAlert(true);
        }

        updateMoleculeImageLoader(true);

        return;
    }

    const showMoleculeMethod = () => {


        if (moleculeImageAlert == true) {

            return (

                <div className="card-service wow fadeInUp">
                    <div className="header">
                        <Alert variant="filled" severity="error">
                            The molecule structure for {nameOne} can't be found...
                        </Alert>
                    </div>
                    <div className="body">
                        <h5 className="text-secondary">{nameOne}</h5>
                    </div>
                </div>
            );
        }

        else {

            if (moleculeImageLoader == true) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <img className="molecule-image" src={moleculeImage} alt="" />
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameOne}</h5>
                        </div>
                    </div>
                );
            }

            if (moleculeImageLoader == false) {

                return (

                    <div className="card-service wow fadeInUp">
                        <div className="header">
                            <ReactBootStrap.Spinner animation="border" style={{ color: "#2ecc71" }}></ReactBootStrap.Spinner>
                        </div>
                        <div className="body">
                            <h5 className="text-secondary">{nameOne}</h5>
                        </div>
                    </div>
                );
            }
        }
    }



    const onSubmit = event => {

        event.preventDefault();

        (async () => {

            updateMoleculeImageLoader(false);

            await getMoleculeStructure();
            console.log("Waited!");

        })();
    }


    //main return method
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
                                    <a className="nav-link" href="/drug3dtest">Molecule View Tool</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="page-section">
                    <div className="container">
                        <div className="card-service-large wow fadeInUp">
                            <form onSubmit={onSubmit}>
                                <h1 className="rxcui-header">Molecule View Tool</h1>
                                <h2 className="rxcui-subheader">Enter the name of the molecule you'd like to see the structure for below</h2>

                                <input
                                    className="rxcui-name-input"
                                    id="nameOne"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Molecule Name..."
                                    value={nameOne}
                                    onChange={(event) => nameChangeOne(event.target.value)}
                                />

                                <button type="submit" className="btn btn-primary">View Structure</button>

                                <div className="card-service-large-structures wow fadeInUp">
                                    {showMoleculeMethod()}
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
                                <p>Take substancees safely</p>
                                <p>Medical Grade Information provided by DrugBank Official Research Records</p>
                                <p>Creator: Shae Sullivan</p>
                            </div>
                        </div>
                    </div>
                </footer>

            
        </div>

    );
}