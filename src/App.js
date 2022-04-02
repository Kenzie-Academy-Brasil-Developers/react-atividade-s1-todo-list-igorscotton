import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import Form from "./components/Form";

import TodoList from "./components/TodoList";

function App() {
  const [Todos, setTodos] = useState([]);

  const addTodos = (newTodo) => {
    setTodos([...Todos, newTodo]);
  };

  const handleTodo = (event ,removeTodo) => {
    event.preventDefault()

    const filterTodo = Todos.filter((Todo) => {
      return Todo !== removeTodo;
    });

    setTodos(filterTodo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form__todo">
        <Form addTodos={addTodos}></Form>
        <TodoList
          todos={Todos}
          handleTodo={handleTodo}
        ></TodoList>
        </div>        
      </header>
    </div>
  );
}

export default App;
