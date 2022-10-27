const TodoItem = ({ todo }) => {
  return (
    <li className={ todo.status }>
      { todo.task }
    </li>
  )
}

export default TodoItem