import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
}

export default Expenses;
