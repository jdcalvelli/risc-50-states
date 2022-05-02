import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';

import { StateInfo } from "./helperComponents/StateInfo";
import { UseMapHelper } from "./helperComponents/UseMapHelper";
import { LeafletPopup } from "./helperComponents/LeafletPopup";

import { loadData } from "../tasks/loadData";
import { determineStateColor } from '../tasks/determineStateColor'

//this will be the leaflet map - which will need state i believe?
//has to be functional component - meaning the state will have to be lifted from here
// css moved to in the container declaration, out of css file

function MapSection(props) {

    //need state to track which state we're talking about, then pass the state into the stateinfo object as prop
    const [stateName, setStateName] = useState('TEST STATE NAME');
    const [stateGrade, setStateGrade] = useState('TEST GRADE');
    const [stateAnalysis, setStateAnalysis] = useState('TEST STATE ANALYSIS');
    const [stateMathStandardsLink, setMathStandardsLink] = useState('#');
    const [stateCompSciStandardsLink, setCompSciStandardsLink] = useState('#');
    const [stateCTELink, setStateCTELink] = useState('#')
    const [stateNGSSStandardAdoption, setStateNGSSStandardAdoption] = useState('TEST NGSS')

    //basic styling of each geojson object drawn
    //place in GeoJSON component using style prop
    const geoMapStyle = function(state) {
        return determineStateColor(state.properties['Grade for Visualization'])
    }

    const onEachState = (state, layer) => {
        //popup per layer that shows name and final grade
        //layer.bindPopup(`<h3>${state.properties.name}</h3> <br> <h1>${state.properties['Final Grade']}</h1>`)
        layer.bindPopup(ReactDOMServer.renderToString(<LeafletPopup name={state.properties.name} finalGrade={state.properties['Grade for Visualization']}/>))

        //adding the click event listener, and having the state values change!
        layer.on('click', (event) => {
            //state update
            setStateName(state.properties.name);
            setStateGrade(state.properties['Grade for Visualization']);
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
            <MapContainer 
                center={[37.0902, -95.7129]} 
                zoom={4}
                scrollWheelZoom={false}>
                    
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* fix this part after adding the new data script */}
                <GeoJSON 
                    data={loadData()} 
                    style={geoMapStyle}
                    onEachFeature={onEachState}
                />
            </MapContainer>


            {/* if state is empty, display something like - click on the map to find out more, else show state info */}

            {stateName == 'TEST STATE NAME' ? <UseMapHelper/> : 
            <StateInfo 
                name={stateName}
                grade={stateGrade}
                analysis={stateAnalysis}
                mathStandardsLink={stateMathStandardsLink}
                compSciStandardsLink={stateCompSciStandardsLink}
                cteLink={stateCTELink}
                ngssStandardAdoption={stateNGSSStandardAdoption}
            />}
        </div>
    )
}

export { MapSection }