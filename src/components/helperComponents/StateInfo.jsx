import React from "react";

//no state changes, just shows info based on state set through map click
//on click of a particular state in MapComponent, pass which state got clicked down as props to StateInfo
//display information about that state

function StateInfo(props) {
    return (
        <div className="stateInfo">
            <h1>{props.name} - {props.grade}</h1>

            <div className="stateAnalysis">
                <p>{props.analysis}</p>
            </div>

            {/* check to see if the thing is N/A, if so don't display, but if not then display */}

            <p>See {props.name} educational standards below:</p>
            {props.mathStandardsLink == 'N/A' ? null : <p><a href={props.mathStandardsLink}>/ Math</a> {props.compSciStandardsLink == 'N/A' ? null :<a href={props.compSciStandardsLink}>/ Computer Science</a>} {props.cteLink == 'N/A' ? null : <a href={props.cteLink}>/ Career and Tech Education</a>}</p>}
            <div className="stateNGSS">
                <p>Has {props.name} adopted Next General Science Standards (NGSS)?:</p>
                <p>{props.ngssStandardAdoption}</p>
            </div>
        </div>
    )
}

export { StateInfo }