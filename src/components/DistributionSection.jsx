import React from "react";

//display for grade counts

function DistributionSection(props) {
    return (
        <div className="distributionSection">
            <h3>Grade Distribution Breakdown</h3>
            <div className="breakdown">
                <h1><span style={{color: '#2b83ba'}}>A:</span> 1</h1>
                <h1><span style={{color: '#abdda4'}}>B:</span> 7</h1>
                <h1><span style={{color: '#ffffbf'}}>C:</span> 12</h1>
                <h1><span style={{color: '#fdae61'}}>D:</span> 21</h1>
                <h1><span style={{color: '#d7191c'}}>F:</span> 9</h1>
            </div>
        </div>
    )
}

export { DistributionSection }