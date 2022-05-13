import React from "react";

//import chartjs core
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Bar } from 'react-chartjs-2';

//import chartjs plugins
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels)
import ChartDeferred from 'chartjs-plugin-deferred';
Chart.register(ChartDeferred)

import { determineChartNameColor } from "../tasks/determineChartNameColor";

//display for grade counts

function DistributionSection(props) {
    
    //changing font values for bar graph
    Chart.defaults.font.size = 16
    Chart.defaults.font.family = 'Gotham Rounded'

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
                    scales: {
                        y: {
                            grace: '50%',
                        },
                        x: {
                            grid: {
                                display: false,
                            },
                            title: {
                                display: true,
                                text: 'Number of States Per Grade',
                                padding: 20
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                        },
                        deferred: {
                            xOffset: 150,
                            yOffset: '50%',
                            delay: 350

                        }
                    }
                }} 
                data={{
                    labels: ['A', 'B', 'C', 'D', 'F'],
                    datasets: [
                        {
                            label: 'Number of States',
                            data: distributionReducer(props.loadedData),
                            backgroundColor: [
                                determineChartNameColor('A'), 
                                determineChartNameColor('B'), 
                                determineChartNameColor('C'),
                                determineChartNameColor('D'),
                                determineChartNameColor('F')
                            ]
                        }
                    ],
                }}
            />

        </div>
    )
}

export { DistributionSection }