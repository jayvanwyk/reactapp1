import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  if (props.expenses.length > 0) {
    <ul className="expenses-list">
      {
        (expensesContent = props.expenses.map((item) => {
          return (
            <ExpenseItem
              expenseDate={item.date}
              expenseTitle={item.title}
              expenseAmount={item.amount}
              key={item.index}
            />
          );
        }))
      }
    </ul>;
  }

  return <div>{expensesContent}</div>;
};

export default ExpensesList;
