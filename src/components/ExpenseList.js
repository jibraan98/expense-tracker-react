import React from 'react'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {

  const {expenses} = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
		setFilteredExpenses(expenses);
	}, [expenses]);

  return (
    <div>
        <p>Expenses</p>
        <ul className="list-group">
            {filteredExpenses.map((expense) => (
              <ExpenseItem 
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              />
            ))}
        </ul>
    </div>
  )
}

export default ExpenseList