import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { TodoItem } from './TodoItem';

export const TodoList = ({
    todos,
    onTodoAddClick
    }) => {
    return (
        <div style={{ width: "50%", margin: "20px auto" }}>

            <h1 style={{ textAlign: "center" }}>Todo List </h1>

            <ListGroup >
                {todos.map(x => <TodoItem key={x._id} todo={x}/>)}
            </ListGroup>

            {todos.length === 0 && <p>No todos found</p>}

            <Button variant="primary" style={{marginTop: "10px"}} onClick={onTodoAddClick}>Add</Button>{' '}
    
        </div>
    )
}