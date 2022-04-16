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

    return (
        //this componenet receives data from app.js and then calls the expenseItem.js component
        //4 times and extract the value from the array on app.js to render every ExpenseItem
        <div>
            
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectedYear={filterChangeHandler}/>

            {/*
            here I use the map expression to transform the array from app.js to an array full
            of jsx items and the ExpenseItem components is now being rendered dynamically
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
        </Card>
        </div>   
    );
}

export default Expenses;
