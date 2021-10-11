import React, { Component } from "react";
import axios from "axios";

class AllDrugTerms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            DrugTerms: []
        }
    }

    async componentDidMount() {

        axios.get('https://rxnav.nlm.nih.gov/REST/displaynames.json')
        .then(response => {
            this.setState({
                DrugTerms: response.data.displayTermsList.term

            })
            console.log(response.data.displayTermsList.term)
        })
    }



    render() {

        //call upon constant 'DrugTerms' array
        const {DrugTerms} = this.state

        //return method
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
                    <div className="container">
                        <a href="#" className="navbar-brand">Drug<span className="text-primary">Interactor</span></a>

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

                            <h1>List of all Drug Names</h1>
                            <h2>Total Number Of Drug Terms: {DrugTerms.length}</h2>
                            {
                                //map all drug terms individually from DrugTerms array and display on screen through HTML
                                DrugTerms.map(Term => <div className="card-service-large-item">Term: {Term}</div>)
                            }
                        </div>

                    </div>
                </div>







            </div>
        )

    }
}

export default AllDrugTerms
