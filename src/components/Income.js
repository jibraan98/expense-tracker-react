import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'

const Income = () => {

  const {income, dispatch} = useContext(AppContext);




  return (
    <div className='income'>
        <p>Income: ${income}</p>
    </div>
  )
}

export default Income