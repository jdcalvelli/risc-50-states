import React from "react";

//no state changes, just shows info based on state set through map click
//on click of a particular state in MapComponent, pass which state got clicked down as props to StateInfo
//display information about that state

function StateInfo(props) {
    return (
        <div className="stateInfo">
            <h3>state name: {props.name} </h3>

            <h5>analysis: </h5>
            <p>{props.analysis}</p>

            <p>see current math standards here - link</p>
            <p>see current computer science standards here - link</p>
            <p>see current career and tech ed sequence here - link</p>
            <p>next general science standards adopted? </p>
        </div>
    )
}

export { StateInfo }