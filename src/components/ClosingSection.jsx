import React from "react";

//stateless component

function ClosingSection(props) {
    return(
        <div className="closingSection">
            <h3>Take Action</h3>

            <p><span style={{fontWeight: 'bold'}}>See a bad grade for your state?</span> Take a look at our <a href="https://docs.google.com/document/d/1GompsDPMiYgzp0dZ_0tYuXJKQFexkQXA3Cc3-Qflvus/edit?usp=sharing">advocacy pack</a>, and consider <br/> calling your state education department to find out more. </p>

            <p><span style={{fontWeight:'bold'}}>Did we miss something?</span> Disagree with our grade? <br/>
            Get in touch with us directly at <a href="mailto:centerforrisc@gmail.com?subject=50 State Snapshot Feedback">centerforrisc@gmail.com</a>.</p>

            <p>This map is a work in progress, and we are trying our best <br/> to keep pace with all the momentum in the field.</p>

            <p>Ultimately, this work is meant <span style={{fontWeight: 'bold'}}>to motivate more action, not to hurt feelings.</span> <br/>
             Many states are charging ahead – we hope they can use this work as a resource to do more. </p>

        </div>
    )
}

export { ClosingSection }