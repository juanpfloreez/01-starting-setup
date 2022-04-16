import React, { useState} from 'react';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

//array wich holds all the expenses data, hardcoded by now
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 4, 4),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 4, 5),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 4, 6),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022,4,7),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  //function to be executed when the onAddExpense changes
  //is triggered whenever a new expense is added and receive the expense as a parameter
  const addExpenseHandler = expense => {
    //here I change the state but first I use the function to get the latest state
    //prevExpenses, and then return the new expense to update the state
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
