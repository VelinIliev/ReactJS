import { useContext } from 'react';

import { TodoContext } from '../contexts/TodoContexts';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export const TodoItem = ({ todo }) => {

    const { onTodoDeleteClick, onTodoClick } = useContext(TodoContext);

    return (
        <ListGroup.Item action style={{ display: "flex", alignItems: "center" ,justifyContent: "space-between",
            textDecoration: todo.isCompleated ? "line-through": "none"}}
            onClick={() => onTodoClick(todo._id)}>
            {todo.text} 
            <Button variant="dark" onClick={() => onTodoDeleteClick(todo._id)}>X</Button>
        </ListGroup.Item>
    )
} 