import { useState } from 'react'
import Form from './components/form'
import TodoList from './components/todoList'
import './App.css'

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      task: 'Task 1',
      status: 'open'
    },
    {
      task: 'Task 2',
      status: 'open'
    }
  ])

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Form setTodoList={ setTodoList } todoList={ todoList } />
      <TodoList todoList={ todoList } />
    </div>
  )
}

export default App
