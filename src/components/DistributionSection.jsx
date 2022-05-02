import React from "react";

//display for grade counts

function DistributionSection(props) {
    return (
        <div className="distributionSection">
            <h3>Grade Distribution Breakdown</h3>
            <div className="breakdown">
                <h1>A: 1</h1>
                <h1>B: 7</h1>
                <h1>C: 12</h1>
                <h1>D: 21</h1>
                <h1>F: 9</h1>
            </div>
        </div>
    )
}

export { DistributionSection }