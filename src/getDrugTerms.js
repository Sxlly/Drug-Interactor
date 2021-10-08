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
                <h1>List of all Drug Names</h1>
                <h2>Total Number Of Drug Terms: {DrugTerms.length}</h2>
                {
                    //map all drug terms individually from DrugTerms array and display on screen through HTML
                    DrugTerms.map(Term => <div>Term: {Term}</div>)
                }
            </div>
        )

    }
}

export default AllDrugTerms
