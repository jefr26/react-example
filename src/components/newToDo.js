import { useEffect, useState } from 'react'
import Input from './input'
import Button from './button'

const NewToDo = ({ setTodoList, todoList }) => {
  const [todo, setTodo] = useState({ task: '', status: 'open' })

  useEffect(() => {
    setTodo({ task: '', status: 'open' })
  }, [todoList])

  const handleChange = (e) => {
    setTodo({ task: e.target.value, status: 'open' })
  }

  const handleClick = () => {
    if (todo.task === '') return
    setTodoList([...todoList, todo])
  }

  return (
    <>
      <Input handleChange={ handleChange } todo={ todo } />
      <Button handleClick={ handleClick } />
    </>
  )
}

export default NewToDo