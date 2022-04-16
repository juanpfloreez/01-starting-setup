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
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}      
            ></ExpenseItem>

            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}      
            ></ExpenseItem>
        </Card>
        </div>
        
    );
}

export default Expenses;
