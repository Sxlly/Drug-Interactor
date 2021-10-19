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

            <button onClick={onSubmit}>Test</button>

            <div id="twirler" height="300" width="300">

                <img src={url} />

            </div>
        </div>

    );
}