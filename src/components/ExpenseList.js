import React from 'react'
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return (
            <Item key={expense.id} expense={expense} />
          )
        })}
      </ul>
      {expenses.length > 0 && <button>Clear All
        <MdDelete />
      </button>}
    </>
  )
}

export default ExpenseList;