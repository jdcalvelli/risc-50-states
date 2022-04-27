import React from "react";

// no state required, functional component just to display heading

function HeadingSection(props) {
    return (
        <div className="headingSection">
            <h1>The National Data Literacy Snapshot</h1>
            <h3>The <span style={{color: '#fc4512'}}>Center for RISC</span> researched and graded all 50 States to determine what they have done 
                to <span style={{color: '#fc4512'}}>promote data science education.</span> How does your state compare? </h3>
        </div>
    )
}

export { HeadingSection }