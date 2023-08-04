import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  }

  const addExpenseHandler = (enteredExpenseData) => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString() * 100,
    };

    props.onAddNewExpense(newExpense);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={onEditingHandler}>Add new expense</button>
      )}
      {isEditing && <ExpenseForm onAddExpense={addExpenseHandler} onCancelEdit={stopEditHandler}/>}
    </div>
  );
};

export default NewExpense;
