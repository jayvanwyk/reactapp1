import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      index: 1,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      index: 2,
      title: 'Home Insurance',
      amount: 59.83,
      date: new Date(2021, 1, 2),
    },
    {
      index: 3,
      title: 'Pet Insurance',
      amount: 498.67,
      date: new Date(2021, 2, 3),
    },
    {
      index: 4,
      title: 'Adventure Sports Insurance',
      amount: 586.67,
      date: new Date(2021, 3, 8),
    },
  ];

  return (
    <div>
      <h2>Lets get started</h2>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}
            key={item.index}
          />
        );
      })}
    </div>
  );
}

export default App;
