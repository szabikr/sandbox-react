import { useState, useEffect, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'

const constantTodos = [
  {
    id: uuid(),
    name: 'shopping',
    complete: true,
  },
  {
    id: uuid(),
    name: 'workout',
    complete: false,
  },
  {
    id: uuid(),
    name: 'coding',
    complete: false,
  },
]

const TODO_ITEMS_KEY = 'todoItems'

function App() {
  const todoItemInputRef = useRef(null)
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem(TODO_ITEMS_KEY))
    return savedTodos || constantTodos
  })
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodoClick() {
    setErrorMessage('')
    const name = todoItemInputRef.current.value
    if (name === '') {
      setErrorMessage('Write something that you want to accomplish.')
      return
    }
    setTodos([
      ...todos,
      {
        id: uuid(),
        name,
        complete: false,
      },
    ])
    todoItemInputRef.current.value = ''
  }

  function handleClearClick() {
    setErrorMessage('')
    if (!todos.find((todo) => todo.complete)) {
      setErrorMessage('No completed todos to be cleared from the list.')
      return
    }
    setTodos(todos.filter((todo) => !todo.complete))
  }

  function handleToggleTodoChange(id) {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        }
        return todo
      }),
    ])
  }

  return (
    <>
      <main>
        <h1>Todo List</h1>
        <section>
          <label htmlFor="new-todo-item">Would like to accomplish</label>
          <input id="new-todo-item" ref={todoItemInputRef} type="text" />
          <button class="primary" onClick={handleAddTodoClick}>
            Add todo
          </button>
          <button class="secondary" onClick={handleClearClick}>
            Clear list
          </button>
        </section>

        <section class="error-message">{errorMessage}</section>

        <section>
          {todos.map((todo) => (
            <div key={todo.id}>
              <input
                id={`todo-item-${todo.id}`}
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleToggleTodoChange(todo.id)}
              />
              <label htmlFor={`todo-item-${todo.id}`}>{todo.name}</label>
            </div>
          ))}
        </section>
      </main>
      <hr />
      <footer>
        a{' '}
        <strong>
          <a href="https://szabi.space/">szabi.space</a>
        </strong>{' '}
        development
      </footer>
    </>
  )
}

export default App
