import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            index: Math.random().toString()
        };
        props.onNewExpenseAdded(expenseData);
    }

    return <Card className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
};

export default NewExpense;