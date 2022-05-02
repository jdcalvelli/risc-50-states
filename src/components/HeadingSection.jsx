import React from "react";

// no state required, functional component just to display heading

function HeadingSection(props) {
    return (
        <div className="headingSection">
            <h1>The National Data Literacy Snapshot</h1>
            <h3>The <span style={{color: '#fc4512'}}>Center for RISC</span> researched and graded all 50 States to understand their efforts 
            towards <span style={{color: '#fc4512'}}>advancing data science education.</span> How does your state compare? </h3>
        </div>
    )
}

export { HeadingSection }