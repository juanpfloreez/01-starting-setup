import React, { useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

    //this is a stateful component

    //this state manages the selected year filter state
    const [filteredYear, setFilteredYear] = useState('2022');
    //every use... is a react hook

    //function when something happens, like whenever a new value(year) is selected, and then assings the
    //value to the state 
    const filterChangeHandler = selectedYear => {
       setFilteredYear(selectedYear);
    };

    //I will crete a new variable that takes the props.items from app.js and create a 
    //new array but with the filtered data I want, and also to avoid losing or deleting data
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
        //here I get the expense date, use the getFullYear and transform it to sting and then
        // see if the result is equal to the filteredYear (selected on the filter)
        // so only item that does match the filtered year will be kept in the new filter expeneses array
    });
    
    return (
        <div>   
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>   
    );
}

export default Expenses;
