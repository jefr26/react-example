import NewToDo from './newToDo'

const Form = ({ setTodoList, todoList }) => {

  const handleSubmit = e => e.preventDefault()

  return (
    <form className="todo-form" onSubmit={ handleSubmit }>
      <NewToDo setTodoList={ setTodoList } todoList={ todoList } />
    </form>
  )
}

export default Form