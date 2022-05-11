import React from "react";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Bar } from 'react-chartjs-2';

//display for grade counts

function DistributionSection(props) {
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
                            data: ['1', '2', '3', '4', '5']
                        }
                    ],
                }}
            />;
        </div>
    )
}

export { DistributionSection }