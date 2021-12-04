import React, { Component, useState } from "react";
import './bootstrap.css';
import './theme.css';
import { OverlayTrigger, Tooltip } from "react-bootstrap";


export default () => {





    //return method
    return (

        <div>
            <header>
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

                <div className="container">
                    <div className="page-banner home-banner">
                        <div className="row align-items-center flex-wrap-reverse h-100">
                            <div className="col-md-6 py-5 wow fadeInleft">
                                <h1 className="mb-4">Welcome to Drug Interactor!</h1>
                                <p className="text-lg text-grey mb-5">Take Substances Safely</p>
                                <a href="/getInteractionPair" className="btn btn-primary">Dive In</a>
                            </div>
                            <div className="col-md-6 py-5 wow zoomIn">
                                <div className="img-fluid text-center">
                                    <img title="LSD Molecule" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/LSD_Structure.svg" alt="STRUCTURE" />
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
                                    <img src="https://www.svgrepo.com/show/106499/chemistry.svg" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Drug Interactor</h5>
                                    <p>The online tool</p>
                                    <a href="/getInteractionPair" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="https://www.svgrepo.com/show/259280/chemistry-laboratory.svg" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">All Drug Terms</h5>
                                    <p>The online tool</p>
                                    <a href="/AllDrugTerms" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="https://www.svgrepo.com/show/256763/id-id.svg" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Rxcui ID Finder</h5>
                                    <p>The online tool</p>
                                    <a href="/getRxcuiId" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="https://www.svgrepo.com/show/126805/chemistry.svg" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">All Interactions</h5>
                                    <p>The online tool</p>
                                    <a href="/getDrugInteraction" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="https://www.svgrepo.com/show/78185/molecular-structure.svg" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Molecule View Tool</h5>
                                    <p>The online tool</p>
                                    <a href="/drug3dtest" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <span className="subhead">About Us</span>
                            <h2 className="title-section">A cool project gone public!</h2>
                            <div className="divider"></div>

                            <p>Drug interactor started as a cool idea and self help tool for the creator, although after the completion of the website</p>
                            <p>it was obvious that it would be of use to the public, and the rest was history!</p>
                            <a href="" className="btn btn-primary mt-3">Read More</a>
                        </div>
                        <div className="col-lg-6 py-3 wow fadeInRight">
                            <div className="img-fluid py-3 text-center">
                                <img src="https://www.svgrepo.com/show/71137/globe.svg" alt="image" />
                            </div>
                        </div>
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

                    <div className="row mb-5">
                        <div className="col-lg-3 py-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Drugbank_logo.svg"/>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    );
}