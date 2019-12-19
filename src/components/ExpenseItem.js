import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md';

const ExpenseItem = ({ expense, editItem, deleteItem }) => {
  const { id, charge, amount } = expense;
  return (
    <li>
      <div>
        <span>{charge}</span>
        <span>${amount}</span>
      </div>
      <div>
        <button onClick={() => editItem(id)}><MdEdit /></button>
        <button onClick={() => deleteItem(id)}><MdDelete /></button>
      </div>
    </li>
  )
}

export default ExpenseItem;