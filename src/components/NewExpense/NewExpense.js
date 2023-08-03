import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseButton from "./NewExpenseButton";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);

  console.log(addExpense);

  const switchState = (selectedState) => {
    setAddExpense(selectedState);
    console.log(selectedState);
  };

  const addExpenseHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString() * 100,
    };

    props.onAddNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <NewExpenseButton onStateChange={switchState}/>
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
