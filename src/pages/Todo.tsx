import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo, getTodos } from "../api/todo";
import { TodoResponse } from "../type/todo";
import TodoItem from "../components/TodoItem";

const TodoPage = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoResponse[]>([]);

  const reload = () => {
    getTodos()
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin");
    } else {
      reload();
    }
  }, [navigate]);

  return (
    <>
      <input
        data-testid="new-todo-input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={() => {
          createTodo({ todo })
            .then(() => {
              reload();
            })
            .catch((err) => alert(err));
          setTodo("");
        }}
      >
        추가
      </button>
      <ul>
        {todos.map(({ id, isCompleted, userId, todo }) => (
          <TodoItem
            id={id}
            isCompleted={isCompleted}
            userId={userId}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoPage;
