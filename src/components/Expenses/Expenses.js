import React, { useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
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
        //this componenet receives data from app.js and then calls the expenseItem.js component
        //4 times and extract the value from the array on app.js to render every ExpenseItem
        <div>
            
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler}/>
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
            ))}
            {/*
            here I use the filteredExpenses variable to take the filtered expenses based
            on the selectedyear, and use the map expression to transform the array to an array full
            of jsx items and the ExpenseItem components is now being rendered dynamically
            based on the actual array number of objects on app.js
            */}
        </Card>
        </div>   
    );
}

export default Expenses;
