import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

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
    };


    return (

    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpense;