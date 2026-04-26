import React, { useState, useEffect } from 'react'
import { getItemsLeft } from './utils'

const API = 'http://localhost:8000/api'

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  // TODO: fetch todos from API on mount

  const addTodo = async () => {
    // TODO: POST to API and update state
  }

  const toggleTodo = async (id) => {
    // TODO: PATCH to API and update state
  }

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          data-testid="todo-input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button data-testid="add-button" onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} data-testid="todo-item">
            <span
              data-testid={`toggle-${todo.id}`}
              className={todo.completed ? 'completed' : ''}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <p data-testid="items-left">{getItemsLeft(todos)}</p>
    </div>
  )
}
