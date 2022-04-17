import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    //component for the bars in the chart

    
    //Variable to calculate and store the fill height of each instance
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return ( 
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
                {/*this fill div is required to remember by how much this chart bar will be filled*/} 
            </div>
            <div className="chart-bar__label">{props.label}</div>
            {/*bunch of divs responisble for rendering the chart correctly*/}
        </div>
    );
};

export default ChartBar;