import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formValue, setFormValue] = useState({title: '', date: '', value: ''});

  const onSubmitHandler = (event) =>{
      event.preventDefault();
  };

  const onChangeHandler = (event) =>{
      switch (event.target.name){
          case "titleInput" : setFormValue((prevState) => {return {...formValue, title: event.target.value}}); break;
          case "dateInput" : setFormValue((prevState) => {return {...formValue, date: event.target.value}}); break;
          case "valueInput" : setFormValue((prevState) => {return {...formValue, value: event.target.value}}); break;
          default: return;
      }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onChangeHandler} name="titleInput"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-03-05" onChange={onChangeHandler} name="dateInput" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={onChangeHandler} name="valueInput" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
