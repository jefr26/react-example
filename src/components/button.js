const Button = ({ handleClick }) => {
  return (
    <button
      className="submit btn"
      type="submit"
      onClick={ handleClick }
    >
      Add
    </button>
  )
}

export default Button