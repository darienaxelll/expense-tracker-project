import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterChange={changeYear} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
