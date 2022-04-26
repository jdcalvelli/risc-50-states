import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';

import { StateInfo } from "./StateInfo";

import { loadData } from "../tasks/loadData";

//this will be the leaflet map - which will need state i believe?
//has to be functional component - meaning the state will have to be lifted from here
// css moved to in the container declaration, out of css file

function MapSection(props) {

    //need state to track which state we're talking about, then pass the state into the stateinfo object as prop
    const [stateName, setStateName] = useState('TEST STATE NAME');
    const [stateAnalysis, setStateAnalysis] = useState('TEST STATE ANALYSIS');
    const [stateMathStandardsLink, setMathStandardsLink] = useState('#');
    const [stateCompSciStandardsLink, setCompSciStandardsLink] = useState('#');
    const [stateCTELink, setStateCTELink] = useState('#')
    const [stateNGSSStandardAdoption, setStateNGSSStandardAdoption] = useState('TEST NGSS')

    //basic styling of each geojson object drawn
    //place in GeoJSON component using style prop
    // const geoMapStyle = {
    //     fillColor: 'yellow',
    //     weight: 1,
    //     color: 'black',
    // }

    const onEachState = (state, layer) => {
        //called when each geojson object is drawn, can be used to set options like color!
        layer.bindPopup(`${state.properties['Final Grade']}`)

        //adding the click event listener, and having the state values change!
        layer.on('click', (event) => {
            console.log(state.properties['Final Grade'])

            setStateName(state.properties.name);
            setStateAnalysis(state.properties['Reasoning (Presentable)']);
            setMathStandardsLink(state.properties['Math Standards Link']);
            setCompSciStandardsLink(state.properties['CS Standards Link'] == 'N/A' ? "#" : state.properties['CS Standards Link']);
            setStateCTELink(state.properties['CTE Hyperlink'] == 'N/A' ? "#" : state.properties['CS Standards Link']);
            setStateNGSSStandardAdoption(state.properties['NGSS?']);
        })
    }

    return (
        <div className="mapSection">

            {/* actual drawing of leaflet map */}
            <MapContainer style={{ height: 600, width: 900 }} center={[37.0902, -95.7129]} zoom={4}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* fix this part after adding the new data script */}
                <GeoJSON 
                    data={loadData()}  
                    onEachFeature={onEachState}
                />
            </MapContainer>

            {/* implementation of state info section */}
            <StateInfo 
                name={stateName}
                analysis={stateAnalysis}
                mathStandardsLink={stateMathStandardsLink}
                compSciStandardsLink={stateCompSciStandardsLink}
                cteLink={stateCTELink}
                ngssStandardAdoption={stateNGSSStandardAdoption}
            />
        </div>
    )
}

export { MapSection }