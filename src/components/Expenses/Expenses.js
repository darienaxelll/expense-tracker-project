import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("");

  const changeYear = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter onFilterChange={changeYear} />
      <Card className="expenses">
        <ExpenseItem expenses={props.expenses[0]} />
        <ExpenseItem expenses={props.expenses[1]} />
        <ExpenseItem expenses={props.expenses[2]} />
        <ExpenseItem expenses={props.expenses[3]} />
      </Card>
    </div>
  );
};

export default Expenses;
