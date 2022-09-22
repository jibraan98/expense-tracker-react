import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AppContext } from '../AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {

    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

		setName('');
		setCost('');
	};

  return (
    <div className='add-expense'>
        Add Expense
        <div className='form'>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Expense Item</Form.Label>
            <Form.Control type="text" placeholder="Enter name of Expense" value={name} onChange={(event) => setName(event.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cost</Form.Label>
            <Form.Control type="number" placeholder="Cost of Item" value={cost} onChange={(event) => setCost(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        </div>
    </div>
  )
}

export default AddExpense