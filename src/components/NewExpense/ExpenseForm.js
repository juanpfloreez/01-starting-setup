import React, { useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //this component is to get all the data needed for the project, from a html form, then to pass it to
    //another component 


    //it is totally normal and you can use as many states-useState you need
    //I am using here ArrayDeconstructuring, [first value, second value that I get after the
    //function gets executed]
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //I can put them together into one piece of useState since they are part of the same <form/>
    //so it would be something like this:

    //const [userInput, setUserInput] = useState ({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //});
    

    // the next three functions are executed when the event onChange changes in every jsx element

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value,
        //})
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value,
        //})
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value,
        //})
    };

    const submitHandler = (event) => {
        //functions that executes when user submit the form

        //this is to avoid the page to reload when pressing the buttom, so I am gonna handle the 
        //submision with javasctipt object
        event.preventDefault();

        //now I create an object wich holds all the entered state 
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        //this is to move data (<form/> data) from child component to parent -> NewExpense.js
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

return (
    <form onSubmit={submitHandler}>

        <div className="new-expense__controls">
        
            <div className="new-expense__control">
                <label>Title:</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount:</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date:</label>
                <input type='date' value={enteredDate} min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
            </div>

        </div>

        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;