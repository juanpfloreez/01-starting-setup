import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    //component to get the list of expenses FILTERED BY YEAR,
    //convert them as datapoints and send them to the chart componenet

    //I expect to get the FILTERED EXPENSES as a prop

    //array with objects, since we expect every datapoint to be an object in the chart.js 
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    //for loop to loop through all the expenses which I got via props and look at every
    //expense, get the month of that expense and update the value of the appropriate data point
    //by the expense amount
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount; //to increase the value of a given month
    }
    //we wanna make sure to go through all the expenses for a selected year 
    //and that we then sum up the expenses for all the different months
    //and assing them to the data points

    return ( 
    <Chart dataPoints={chartDataPoints}/>
    );
};

export default ExpensesChart;