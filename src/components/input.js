const Input = ({ handleChange, todo }) => {
  return (
    <input
      type="text"
      onChange={ e => handleChange(e) }
      value={ todo.task }
    />
  )
}

export default Input