import React from "react";

import { determineChartNameColor } from "../tasks/determineChartNameColor";

//display for grade counts

function DistributionSection(props) {
    return (
        <div className="distributionSection">
            <h3>Grade Distribution Breakdown</h3>
            <div className="breakdown">
                <h1><span style={{color: determineChartNameColor('A')}}>A:</span> 1</h1>
                <h1><span style={{color: determineChartNameColor('B')}}>B:</span> 7</h1>
                <h1><span style={{color: determineChartNameColor('C')}}>C:</span> 12</h1>
                <h1><span style={{color: determineChartNameColor('D')}}>D:</span> 21</h1>
                <h1><span style={{color: determineChartNameColor('F')}}>F:</span> 9</h1>
            </div>
        </div>
    )
}

export { DistributionSection }