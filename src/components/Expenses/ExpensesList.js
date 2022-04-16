import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    //logic to render content dinamically 
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }
    
    return ( 
    
        <ul className="expenses-list">
            {/*
                here I use the map expression to transform the array from app.js to an array full
                of jsx items and the ExpenseItem component is now being rendered dynamically
                based on the actual array number of objects on app.js
            */}
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />   
            ))}
        </ul>
    );
};

export default ExpensesList;