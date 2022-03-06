import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const selectedDate = new Date(props.date);
    const month = selectedDate.toLocaleString('en-US', {month: 'long'});
    const day = selectedDate.toLocaleString('en-US', {day: '2-digit'});
    const year = selectedDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>            
        </div>
    )

}

export default ExpenseDate;