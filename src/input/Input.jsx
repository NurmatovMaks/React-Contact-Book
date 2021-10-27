import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Input = (props) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [number, setNumber] = useState('')
    // console.log(props);
    return (
        <div style={{ width: 500, margin: '10px auto 10px auto' }}>
            <Form onSubmit={(e) => {
                e.preventDefault()
                let info = {
                    name,
                    surname,
                    number,
                    id: Date.now()
                }
                props.addTask(info)
                setName('')
                setSurname('')
                setNumber('')
            }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control value={surname} type="text" onChange={(e) => setSurname(e.target.value)} placeholder="enter surname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control value={number} type="number" onChange={(e) => setNumber(e.target.value)} placeholder="enter phone" />
                </Form.Group>
                <Button type='submit'>Add</Button>
            </Form>
        </div>
    );
};

export default Input;