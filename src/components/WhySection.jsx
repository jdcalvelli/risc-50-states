import React from "react";

//stateless component

function WhySection() {
    return (
        <div className="whySection">
            <h3>Why did we do this?</h3>

            <p><span style={{fontWeight: 'bold'}}>The world is now awash with data. </span> 
                90% of the data humanity ever generated was created in 
                just the past few years. All careers — whether in manufacturing, nursing, agriculture — have become 
                dependent on using and analyzing data on a daily basis. With COVID, these transformations have 
                only accelerated, shifting the entire economy to a digitally-based ecosystem driven by data and 
                information. Even our personal lives now depend on making decisions with rapidly increasing amounts 
                of information, whether planning your finances or choosing how to vote. 
                <span style={{fontWeight: 'bold'}}> In short, everyone should have the chance to be data literate.</span></p>
        
            <p>How will our students be prepared for this new era? Our education system must update and revise the 
                learning expectations that define a high school diploma. Students everywhere should be equipped with 
                the basics: how to work with, analyze, and communicate about data - regardless of what livelihood they 
                pursue after high school graduation. To ensure students everywhere have access to high-quality data 
                education, all 50 states will need to update their learning standards and invest in teacher training.</p>
        </div>
    )
}

export { WhySection }