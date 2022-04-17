import React, { useState} from 'react';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

//array wich holds dummy data
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Porsche 911 Carrera S',
    amount: 94.12,
    date: new Date(2022, 9, 23),
  },
  {
    id: 'e2',
    title: 'Palo Alto House',
    amount: 799.49,
    date: new Date(2022, 4, 5),
  },
  {
    id: 'e3',
    title: 'Ferrari 488 Italia',
    amount: 294.67,
    date: new Date(2022, 11, 6),
  },
  {
    id: 'e4',
    title: 'Black Private Jet',
    amount: 450,
    date: new Date(2023,8,7),
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
