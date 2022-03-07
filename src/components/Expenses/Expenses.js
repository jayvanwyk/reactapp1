import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Chart from '../Chart/Chart';

const Expenses = (props) => {
  const [filterSelection, setFilterSelection] = useState({ year: 2020 });

  const onFilterSelectionChangedHandler = (value) => {
    setFilterSelection((prevousState) => {
      return {
        ...prevousState,
        year: Number.parseInt(value),
      };
    });
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense && expense.date.getFullYear() === filterSelection.year
  );



  return (
    <Card className="expenses">
      <ExpensesFilter
        filterSelectionChanged={onFilterSelectionChangedHandler}
        selectedYear={filterSelection.year}
      />
      <Chart />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
