import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {

  const onClickHandler = (event) =>{
    const newTitle = 'New Title';
    setTitle(newTitle);
  }
  const [title, setTitle]  = useState(props.expenseTitle);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
        <button onClick={onClickHandler}>Change</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
