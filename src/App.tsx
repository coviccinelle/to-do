import { useState } from 'react'
import './App.css'

// a basic todolist component
function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [text, setText] = useState('')

  function handleAdd() {
    //setTodos(todos.concat(text))
    setTodos([...todos, text])
    setText('')
  }

  return (
    <div>
      <input value={text} onInput={(e) => {
        e.preventDefault()
        return setText((e.target as HTMLInputElement).value)
      } } />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <>
      <TodoList/>
    </>
  )
}

export default App
