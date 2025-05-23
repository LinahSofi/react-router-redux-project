import React from "react";
import { useSelector } from "react-redux";

const ListExpenses = () => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div>
      <h2>List of Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ${expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListExpenses;