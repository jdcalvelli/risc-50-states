import React from "react";

import { ChartItem } from './ChartItem'

function ChartSection(props) {
    return(
        <div className="chartSection">
            
            <ChartItem 
                chartGradeName='A'
                chartGradeCriteriaArray=
                    {[
                    'Incorporation of mandatory data science learning into mathematics and other classes, such as science and social studies', 
                    'Extensive, advanced elective courses approved focused of data science in mathematics, career & technical education, or other subjects', 
                    'Flexible graduation requirements that make those courses attractive options, OR requirements for data literacy by high school graduation',
                    'Resources (professional development, credentials) at state level dedicated to promoting and supporting data science instruction',
                    'Standards for data science start in middle school, if not earlier'
                    ]}
            />

            <ChartItem
                chartGradeName='B'
                chartGradeCriteriaArray=
                {[
                    'Mandatory data analysis standards or units in mathematics that incorporate modern computer software, and ideally other school subjects',
                    'Additional data science classes or units in optional coursework, such as in mathematics, science, or career & technical education',
                    'Recognition at state level that data science is important; active and approved efforts underway to expand offerings and resources for instruction',
                    'Standards for data science start by freshmen year of high school'
                ]}
            />

            <ChartItem
                chartGradeName='C'
                chartGradeCriteriaArray=
                {[
                    'Statistics or some data analysis in mathematics standards; less material or less emphasis on data than B states or lacks technology focus',
                    'Additional data science content or units may be approved in optional coursework, or embedded in courses like computer science',
                    'State may be very focused on data science, but is in early planning, program design, or development stages',
                    'Standards would allow for data science units or electives in late high school, but may not emphasize or explicitly reference yet'
                ]}
            />

            <ChartItem
                chartGradeName='D'
                chartGradeCriteriaArray=
                {[
                    'Some data analysis in mathematics, but state retains emphasis on traditional mathematics pathway',
                    'Computer science standards may include data analysis, but courses are not widely taken',
                    'Has more detailed statistics standards than an F state, and standards in statistics could extend to middle school'
                ]}
            />

            <ChartItem
                chartGradeName="F"
                chartGradeCriteriaArray=
                {[
                    'Essentially no state interest or initiative on data science education',
                    'Emphasis on traditional math pathways and classes',
                    'May have a small amount of statistics in math standards, but is not emphasized in practice'
                ]}
            />
            
            <p>**This rubric approximates the criteria needed to meet each grade. 
                States may not completely fit any one profile due to individual variation. 
                Rubric does not include assessment of local districts. </p>
        
        </div>
    )
}

export { ChartSection }