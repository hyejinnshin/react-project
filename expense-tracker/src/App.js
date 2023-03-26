
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "샐러드",
    amount: 9410,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "보험료",
    amount: 29460,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "이삭토스트",
    amount: 4500,
    date: new Date(2021, 5, 12),
  }, 
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense)=>{
      return [
        ...prevExpense,
        expense
      ]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
