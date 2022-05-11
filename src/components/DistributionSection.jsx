import React from "react";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Bar } from 'react-chartjs-2';

//display for grade counts

function DistributionSection(props) {
    
    const distributionReducer = (loadedData) => {
        const outputArray = [0, 0, 0, 0, 0];

        loadedData.forEach(item => {
            switch (item.properties['Grade for Visualization']) {
                case 'A':
                    outputArray[0]++
                    break;

                case 'B':
                    outputArray[1]++
                    break;

                case 'C':
                    outputArray[2]++
                    break;

                case 'D':
                    outputArray[3]++
                    break;
                
                case 'F':
                    outputArray[4]++
                    break;
                
                default:
                    break;
            }
        })

        return outputArray;
    }
    
    return (
        <div className="distributionSection">
            <h3>Grade Distribution Breakdown</h3>

            <Bar 
                options={{
                }} 
                data={{
                    labels: ['A', 'B', 'C', 'D', 'F'],
                    datasets: [
                        {
                            label: 'test example',
                            data: distributionReducer(props.loadedData)
                        }
                    ],
                }}
            />

        </div>
    )
}

export { DistributionSection }