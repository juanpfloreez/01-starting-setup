import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    //this compononet is to allow user to select a year filter
    //and then pass that value to another component
    
    //function to listen to event onChange on the select html and then pass the value via props to Expenses.js
    const filterChangeHandler = (event) => {
        //handler word used when function is atached to an event
        props.onSelectedYear(event.target.value);
    };
   
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    {/*
                    here I use the onChange prop to allow to listen for changes on the dropdown
                    and set a default value wich is the year I set as initial on the state on expenes.js
                    */}
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;