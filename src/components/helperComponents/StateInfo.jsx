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
            <div className="stateLinks">
                <p>See {props.name} educational standards below:</p>
                <p>Mathematics: <a href={props.mathStandardsLink}>see standards here.</a></p>
                <p>Computer Science Standards: <a href={props.compSciStandardsLink}>see standards here.</a></p>
                <p>Career and Technical Education: {props.cteLink == "no sequence." ? <span style={{color: '#808080'}}>no sequence.</span> : <a href={props.cteLink}>see standards here.</a>}</p>
            </div>

            <div className="stateNGSS">
                <p>Many states are adopting the Next Generation Science Standards (NGSS), which includes a learning practice in Data Analysis. Has {props.name} adopted NGSS?</p>
                <p style={{color: '#808080'}}>{props.ngssStandardAdoption}</p>
            </div>
        </div>
    )
}

export { StateInfo }