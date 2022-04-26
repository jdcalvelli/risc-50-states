import React from "react";

// no state required, functional component just to display heading

function HeadingSection(props) {
    return (
        <div className="heading">
            <h1>The National Data Literacy Snapshot</h1>
            <h3>The Center for RISC researched and graded all 50 States to determine what they have done 
                to promote data science education. How does your state compare? </h3>
        </div>
    )
}

export { HeadingSection }