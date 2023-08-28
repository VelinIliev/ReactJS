import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { useForm } from '../hooks/useForm'

export const AddTodo = ({onTodoAdd, show, onTodoAddClose}) => {
    const { formValues, onChangeHandler } = useForm({
        text: ""
    });

    const onTodoSubmit = (e) => {
        e.preventDefault();
        onTodoAdd(formValues);
        onTodoAddClose();
        formValues.text = "";
    };

    return (

        <Modal show={show} onEscapeKeyDown={onTodoAddClose} onHide={onTodoAddClose}>
            <Modal.Header closeButton onHide={onTodoAddClose}>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onTodoSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo:</Form.Label>
                        <Form.Control
                            type="text"
                            name="text"
                            placeholder="Enter todo"
                            value={formValues.text}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Button variant="secondary" style={{ marginRight: "10px" }} onClick={onTodoAddClose}>Close</Button>
                    <Button variant="primary" type='submit'>Submit</Button>
                </Form>
            </Modal.Body>

            {/* <Modal.Footer>
                <Button variant="secondary">Close</Button>
                
            </Modal.Footer> */}
        </Modal>

    )
}