import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
   
    //this component is used to get and return into jsx all the expenseitem descriptions
    //like date from the component, and title and item price from props

    const [title, setTitle] = useState(props.title);
    //every use.. is a react hook

    const ClickHandler = () => {
        //handler word used when function is atached to an event
        setTitle('Updated!');  
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={ClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;