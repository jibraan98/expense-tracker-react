import React from 'react'
import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../AppContext';

const ExpenseItem = (props) => {

  const {dispatch} = useContext(AppContext);
  
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <div>
            <li className="list-group-item ">{props.name}
            <TiDelete size='1.5em' className='remove-icon' onClick={handleDelete}/>
            <span className="badge rounded-pill bg-primary cost">${props.cost}</span>
            </li> 
    </div>
  )
}

export default ExpenseItem