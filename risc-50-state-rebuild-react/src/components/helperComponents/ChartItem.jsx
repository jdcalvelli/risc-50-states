import React from "react";

//stateless function

function ChartItem(props) {
    return(
        <div className="chartItem">
            <div className="chartGradeName">
                <h3>{props.chartGradeName}</h3>
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