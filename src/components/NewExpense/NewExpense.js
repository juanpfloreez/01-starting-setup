import React, { useState} from 'react';

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    //true or false state that says if the form is shown or not
    const [isEditing,setIsEditing] = useState(false);

    //I create this function to pass in whenever x event occurs, like the onSaveExpenseData
    //here I receive the data (expensedata from the form) from the child expenseform.js
    //then i add it to a object expenseDate and add it the id field
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

    //after I receive the data from the child (expensedata) from expenseform.js,
    //now I can send it to app.js(parent) via props
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    //function to update the state of isEditing to true, gets triggered when the button is clicked
    const starEditingHandler = () => {
        setIsEditing(true);
    };

    //function to update the state of isEditing to false, when user press cancel button
    const stopEditingHandler = () => {
        setIsEditing(false)
    };

    return (

    <div className="new-expense">
        {!isEditing && <button onClick={starEditingHandler}>Add New Expense</button>}
        {/*show button if we are not editing (false), so I use the isEditing state
        so I use the ! to say is false*/}

        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        {/*show form if we are editing (true), so I use the isEditing state
        so I dont use the ! since I want to say it is true*/}

    </div>
    );
};

export default NewExpense;