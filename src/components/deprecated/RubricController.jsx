import React from "react";

//receives state from how section

function RubricController(props) {
    return (
        <div className="rubricController" onClick={props.handleClick}>
            <div className="rubricControllerInner">
                <h3>{props.showHide} the full rubric</h3>
            </div>
        </div>
    )
}

export { RubricController }