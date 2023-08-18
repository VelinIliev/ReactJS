import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

import React from 'react';

function App() {
    const [todos, setTodos] = React.useState([]);
    const [isLoading , setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data))
                setIsLoading(false)
            })
    }, []);

    const toggleStatus = (id) => {
        setTodos(state => state.map(todo => todo._id === id 
            ? ({ ...todo, isCompleted: !todo.isCompleted }) 
            : todo)
            )
    }

    const addTodo = () => {
        const newId = `todo_${Number(todos[todos.length - 1]._id.split("_")[1]) + 1}`;
        const title = prompt("New task:");
        setTodos(state => [...state, { _id: newId, text: title, isCompleted: false }])
    }

    return (
        <div>
            <Header />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>
                    <div className="add-btn-container">
                        <button className="btn" onClick={addTodo}>+ Add new Todo</button>
                    </div>
                    <div className="table-wrapper">
                        {isLoading 
                            ? <Loading /> 
                            : <Todos todos={todos} toggleStatus={toggleStatus} />}
                        
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
