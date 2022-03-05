import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
