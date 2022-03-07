import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import initialExpenses from './components/expenseData';

const App = () => {


  const [expenses, setExpenses] = useState(initialExpenses);

  const newExpenseAddedEventHandler = (newExpenseInfo) => {
    newExpenseInfo = {...newExpenseInfo, date: new Date(newExpenseInfo.date), amount: Number.parseFloat(newExpenseInfo.amount)}
    setExpenses(prevValue => [newExpenseInfo, ...prevValue]);
  };

  return (
    <div>
      <NewExpense onNewExpenseAdded={newExpenseAddedEventHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
