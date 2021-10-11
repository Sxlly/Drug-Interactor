import React, { Component, useState } from "react";
import './bootstrap.css';
import './theme.css';


export default () => {



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
                                <a href="#" className="btn btn-primary">Dive In</a>
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

                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">All Drug Terms</h5>
                                    <p>The online tool</p>
                                    <a href="" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src="" alt="image" />
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Rxcui ID Finder</h5>
                                    <p>The online tool</p>
                                    <a href="" className="btn btn-primary">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}