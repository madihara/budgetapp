import React, { useState } from 'react';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, editItem, deleteItem, clearAll }) => {


  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return (
            <Item key={expense.id} expense={expense} editItem={editItem} deleteItem={deleteItem} />
          )
        })}
      </ul>
      {expenses.length > 0 && <button onClick={clearAll}>Clear All
        <MdDelete />
      </button>}
    </>
  )
}

export default ExpenseList;