import React, {useState} from "react";

import { ChartSubSection } from './helperComponents/ChartSubSection'

// has state for display of rubric

function HowSection(props) {

    return (
        <div className="howSection">
            <h3>How did we do it?</h3>
            <p>Student learning expectations are governed in different ways across the country, but schools and 
                districts typically take their lead from a State Education Agency (SEA). Several SEAs have already 
                taken steps to increase the quality and quantity of data science learning opportunities. To assess 
                the current quality and access to data literacy opportunities, our team at RISC reviewed the following:</p>

            <div className="listSection">
                <ul>
                    <li>K-12 Math Standards</li>    
                    <li>K-12 Computer Science Standards</li>
                    <li>K-12 Science Standards</li>
                    <li>Career and Technical Education Sequences</li>
                </ul>    
                <ul>
                    <li>Teacher Training Opportunities</li>
                    <li>State Course Catalogs</li>
                    <li>Electives and Enrichment Opportunities</li>
                    <li>Stakeholder Interviews</li>
                </ul>
            </div>
        
            <p><span style={{fontWeight: 'bold'}}>We then graded each state’s current progress</span> in offering high 
                quality data science and data literacy education for all students, from (A+) to (F). While several states 
                are taking big swings to research potential programing, revise standards, and pilot courses, we focused 
                on data science courses and standards that already exist or are feasible in the very near future, with 
                all the necessary approvals already in place. <span style={{fontWeight: 'bold'}}>Note these grades do not 
                include local schools or districts</span> – these grades only apply to state-level efforts. Our full 
                grading rubric is copied below to give more detail.</p>


            <ChartSubSection/>

        </div>
    )
}

export { HowSection }