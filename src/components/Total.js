import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'

const Total = () => {

  const {expenses, income} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className='total'>
        <p>Available: ${income - totalExpenses}</p>
    </div>
  )
}

export default Total