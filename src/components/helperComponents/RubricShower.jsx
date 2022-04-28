import React from "react";

//receives state from how section

function RubricShower(props) {
    return (
        <div className="rubricShower" onClick={props.handleClick}>
            <div className="rubricShowerInner">
                <h3>{props.showHide} the full rubric</h3>
            </div>
        </div>
    )
}

export { RubricShower }