import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import styles from './App.module.css';
import uuid from 'uuid/v4'

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1000 },
  { id: uuid(), charge: "car payment", amount: 300 },
  { id: uuid(), charge: "insurance", amount: 200 }
];


function App() {

  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState('');

  const handleCharge = e => {
    setCharge(e.target.value)
  };
  const handleAmount = e => {
    setAmount(e.target.value)
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuid(), charge, amount };
      setExpenses([...expenses, singleExpense]);
    } else {

    }
  };

  return (
    <>
      <h1>Budget Calculator</h1>
      <main className={styles.main}>
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>total spending: <span>$ {expenses.reduce((accumulated, current) => {
        return (accumulated += parseInt(current.amount));
      }, 0)}</span></h1>
    </>
  );
}

export default App;
