import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>get data</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} />
      ))}
    </div>
  );
}
