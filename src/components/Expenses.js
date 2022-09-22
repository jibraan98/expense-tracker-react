import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'

const Expenses = () => {

  const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

  return (
    <div className='expense'>
        <p>Expneses: ${total}</p>
    </div>
  )
}

export default Expenses