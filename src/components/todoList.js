import TodoItem from "./todoItem";

const TodoList = ({ todoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <TodoItem key={ index } todo={ todo } />
      ))}
    </ul>
  )
}

export default TodoList