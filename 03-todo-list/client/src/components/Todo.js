const Todo = function ({ todo, toggleStatus}) {

    return (
        <tr className={`todo${todo.isCompleted ? " is-completed" : ""}`}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? "Compleated" : "Incomplete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick= { () => toggleStatus(todo._id)}>
                    Change status
                    </button>
            </td>
        </tr>
    )
}

export default Todo