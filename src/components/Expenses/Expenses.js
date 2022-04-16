import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    return (
        //this componenet receives data from app.js and then calls the expenseItem.js component
        //4 times and extract the value from the array on app.js to render every ExpenseItem
        <Card className="expenses">
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
        
    );
}

export default Expenses;
