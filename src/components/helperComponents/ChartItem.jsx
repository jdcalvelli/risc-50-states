import React from "react";

import { determineChartNameColor } from "../../tasks/determineChartNameColor";

//stateless function

function ChartItem(props) {
    return(
        <div className="chartItem">
            <div className="chartGradeName">
                <h3 style={{color: determineChartNameColor(props.chartGradeName)}}>{props.chartGradeName}</h3>
            </div>
            <div className="chartGradeCriteria">
                <ul>
                    {props.chartGradeCriteriaArray.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export { ChartItem }