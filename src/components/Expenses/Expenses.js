import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const changeYear = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterChange={changeYear} />
        <ExpenseItem expenses={props.expenses[0]} />
        <ExpenseItem expenses={props.expenses[1]} />
        <ExpenseItem expenses={props.expenses[2]} />
        <ExpenseItem expenses={props.expenses[3]} />
      </Card>
    </div>
  );
};

export default Expenses;
