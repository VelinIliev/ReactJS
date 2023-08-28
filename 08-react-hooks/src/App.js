import { useState, useEffect } from 'react';
import { TodoContext } from './contexts/TodoContexts';

// import Container from 'react-bootstrap/Container;
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';

const baseUrl = 'http://localhost:3030/jsonstore/todos'


function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTodos(Object.values(data))
            })
    }, []);

    const onTodoAdd = async (values) => {
        values = { ...values, isCompleated: false }
        // console.log(values);
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(values)
        });
        const result = await response.json();
        setTodos(state => [...state, result]);
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true)
    };
    const onTodoAddClose = () => {
        setShowAddTodo(false)
    };
    const onTodoDeleteClick = async (id) => {
        const response = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE"
        });
        // const result = await response.json();

        if (response.status === 200) {
            setTodos(state => state.filter(x => x._id !== id))
        }
    };

    const onTodoClick = async (id) => {
        const todo = todos.find(x => x._id === id);

        const response = await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                ...todo, isCompleated: !todo.isCompleated
            })
        });
        // const result = await response.json();
        if (response.status === 200) {
            setTodos(state => state.map(x => x._id === id ? {...x, isCompleated: !x.isCompleated} : x));
            // console.log(todos);
        } ; 
    } 
    const contextValue = {
        onTodoDeleteClick,
        onTodoClick
    };

    return (
        <TodoContext.Provider value={contextValue}>
            <div>
                <Header />

                <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />

                <AddTodo onTodoAdd={onTodoAdd} show={showAddTodo} onTodoAddClose={onTodoAddClose} />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
