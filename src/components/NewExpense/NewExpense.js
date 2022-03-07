import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      index: Math.random().toString(),
    };
    props.onNewExpenseAdded(expenseData);
    setShowForm(false);
  };

  const inputCancelledHander = () => {
    setShowForm(false);
  };

  const addExpenseHander = () => {
    setShowForm(true);
  };

  let outputToShow = showForm ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onInputCancelled={inputCancelledHander}
    />
  ) : (
    <div>
      <button onClick={addExpenseHander}>Add new Expense</button>
    </div>
  );

  return <Card className="new-expense">{outputToShow}</Card>;
};

export default NewExpense;
