import React from "react";

//receives state from how section

function RubricShower(props) {
    return (
        <div className="rubricShower" onClick={props.handleClick}>
            <h3>see the full rubric</h3>
        </div>
    )
}

export { RubricShower }