
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
 
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }
  const submitHandler = (e) => {
     e.preventDefault(); 
     const  ExpenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate) 
     }
     setEnteredTitle('')
     enteredAmount('')
     enteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
       <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">항목명</label>
            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="">가격</label>
            <input type="number" min='1' step='1' onChange={amountChangeHandler} value={enteredAmount}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="">날짜</label>
            <input type="date" min='2018-01-01' max='2024-12-31' onChange={dateChangeHandler} value={enteredDate} />
          </div>
       </div>
       <div className="new-expense__actions">
        <button type="submit">추가 </button>
       </div>
    </form>
  );
}

export default ExpenseForm;
