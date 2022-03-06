import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filterSelection, setFilterSelection] = useState({ year: 2020});


  const onFilterSelectionChangedHandler = (value) => {
    setFilterSelection((prevousState) => {
      return {
        ...prevousState,
        year: Number.parseInt(value),
      };
    });
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterSelectionChanged={onFilterSelectionChangedHandler} selectedYear={filterSelection.year}
      />
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            expenseDate={item.date}
            expenseTitle={item.title}
            expenseAmount={item.amount}
            key={item.index}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
