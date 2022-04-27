import React from "react";

//stateless component to be rendered through bind popup function

function LeafletPopup(props) {
    return(
        <div style={{fontFamily: 'Nunito, sans-serif'}}>
            <h3>{props.name}</h3>
            <h1 style={{textAlign: "center"}}>{props.finalGrade}</h1>    
        </div>
    )
}

export { LeafletPopup }