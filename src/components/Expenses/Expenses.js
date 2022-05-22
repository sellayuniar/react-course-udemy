import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";


function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear)
  }

  return (
    <div> 
    <Card className="expenses">
    <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem 
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
    </div>
  );
}

export default Expenses;
