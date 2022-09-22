import React, { useContext } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AppContext } from '../AppContext';

const AddIncome = () => {

    const {income, dispatch} = useContext(AppContext);

    const [amount, setAmount] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const newIncome = income + parseInt(amount);
        
        dispatch({
            type: 'SET_INCOME',
            payload: newIncome,
        });
        alert('$' + amount + " was successfully added to your account.")
        setAmount('');
    }

  return (
    <div className='add-expense'>
    Add Or Remove Income
    <div className='form'>
    <Form onSubmit={onSubmit}>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Income</Form.Label>
        <Form.Control type="number" placeholder="Use positive (+) to add and negative (-) to remove" value={amount} onChange={(event) => setAmount(event.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
    </div>
</div>
  )
}

export default AddIncome