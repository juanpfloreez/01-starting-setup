import React from "react";

import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
//this component is to present a graphical representation of expenses per month

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //the Math.max receives an array of numbers, but I have an array of objects, but I am only
    //interested in a specific property of that object, so we can get the value array and call the
    //map function to simply transform them from objects to numbers, stored in "dataPoint.Value"

    const totalMaximum = Math.max(...dataPointValues);
    //this is to calculate the total max value, so I look at all the months and find the
    //biggest value, so it should be the maximum value represented in the chart
    return (
         <div className="chart">{props.dataPoints.map((dataPoint) => (
             <ChartBar
                key={dataPoint.label} 
                value={dataPoint.value}
                maxValue={totalMaximum} 
                label={dataPoint.label}
            />
        ))}
        {/*this returned jsx is to render all the bars calling the ChartBar component
        inside a div "chart" and will display the chart bars dynamically by going through
        an array of data points and mapping every data point to a chart bar
        */}
    </div>
    );
};

export default Chart;