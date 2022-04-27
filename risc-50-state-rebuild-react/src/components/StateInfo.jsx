import React from "react";

//no state changes, just shows info based on state set through map click
//on click of a particular state in MapComponent, pass which state got clicked down as props to StateInfo
//display information about that state

function StateInfo(props) {
    return (
        <div className="stateInfo">
            <h1>{props.name}</h1>

            <div className="stateAnalysis">
                <p>{props.analysis}</p>
            </div>

            <p>See {props.name} <a href={props.mathStandardsLink}> Math Standards</a>, <a href={props.compSciStandardsLink}>Computer Science Standards</a>, and <a href={props.cteLink}>Career and Tech Education Sequence.</a></p>
            
            <div className="stateNGSS">
                <p>Has {props.name} adopted Next General Science Standards (NGSS)?:</p>
                <p>{props.ngssStandardAdoption}</p>
            </div>
        </div>
    )
}

export { StateInfo }