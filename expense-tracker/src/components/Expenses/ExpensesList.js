import "./ExpensesList.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {


  if (props.items.length === 0) {
    return (
        <h2 className="expenses-list__fallback">해당 월에 지출이 없습니다.</h2>
    )
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
