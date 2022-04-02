import './style.css'


function TodoList({ todos, handleTodo }) {
  return (
    <>
      <ul className="todo">
        {todos.map((todo) => {
          return (
            <li key={todo} className="todo__li">
              {todo}
              <button className="todo__button" onClick={(event) => handleTodo(event, todo)}>Retirar Tarefa</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
