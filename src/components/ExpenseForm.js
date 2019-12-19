import React from 'react'
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name='charge'
            placeholder='e.g. rent'
            value={charge}
            onChange={handleCharge}></input>
        </div>
        <div>
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            name='amount'
            placeholder='e.g. 100'
            value={amount}
            onChange={handleAmount}></input>
        </div>
      </div>
      <button type="submit" >Add <MdSend /></button>
    </form >
  )
}

export default ExpenseForm;
