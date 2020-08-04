import React, { useState } from 'react'

import { fetchTodo } from './api/fetchTodo'
import './App.css'

function App() {
    const [id, setId] = useState('')
    const [todo, setTodo] = useState({})
    const pressEnter = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchTodo(id)
            setTodo(data)
            setId('')
        }
    }
    return (
        <div>
            <label htmlFor="todo_id">
                ID:
                <input id='todo_id' type="text" className="search" placeholder="Search..." value={id} onChange={e => setId(e.target.value)} onKeyPress={pressEnter} />
            </label>
            {(Object.keys(todo).length > 0) &&
                <div className="todo">
                    <span className="todo_item">ID: {todo.id}</span>
                    <span className="todo_item">Title: {todo.title}</span>
                    <span className="todo_item">User ID: {todo.userId}</span>
                    <span className="todo_item">Completed: {(todo.completed).toString()}</span>
                </div>}
        </div >
    )
}

export default App
