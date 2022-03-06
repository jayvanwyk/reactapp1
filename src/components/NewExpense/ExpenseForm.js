import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const emptyExpense = {title: '', date: '', amount: ''};

  const [formValue, setFormValue] = useState(emptyExpense);

  const onSubmitHandler = (event) =>{
      event.preventDefault();
      props.onSaveExpenseData(formValue);
      setFormValue({...emptyExpense, date: formValue.date});
      event.target.elements.namedItem('titleInput').focus();
  };

  const onChangeHandler = (event) =>{
      switch (event.target.name){
          case "titleInput" : setFormValue((prevState) => {return {...formValue, title: event.target.value}}); break;
          case "dateInput" : setFormValue((prevState) => {return {...formValue, date: event.target.value}}); break;
          case "valueInput" : setFormValue((prevState) => {return {...formValue, amount: event.target.value}}); break;
          default: return;
      }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onChangeHandler} name="titleInput" value={formValue.title} tabIndex={0}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-03-05" onChange={onChangeHandler} name="dateInput" value={formValue.date} tabIndex={1} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={onChangeHandler} name="valueInput" value={formValue.amount} tabIndex={2} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" tabIndex={3}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
