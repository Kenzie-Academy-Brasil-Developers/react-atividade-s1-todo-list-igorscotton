import { useState } from "react";

import './style.css'

function Form({addTodos}) {
  const [todo, setTodo] = useState("");

  
  return (
    <>
      <form className="form" action="" onSubmit={(event) => event.preventDefault()}>
        <input className="form__input" type="text" value={todo}  onChange={(event) => {setTodo(event.target.value);}} />
        <button className="form__button" type="submit" onClick={() => addTodos(todo)}>Adicionar Tarefa</button>
      </form>
    </>
  );
}

export default Form;
