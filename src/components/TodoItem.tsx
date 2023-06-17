import React, { Dispatch, SetStateAction, useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "../api/todo";
import { TodoResponse } from "../type/todo";

interface Props {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  setTodos: Dispatch<SetStateAction<TodoResponse[]>>;
}

const TodoItem = ({ id, isCompleted, userId, todo, setTodos }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState("");
  const [complete, setComplete] = useState(isCompleted);

  const reload = () => {
    getTodos()
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={complete}
          onChange={(e) => setComplete(e.target.checked)}
        />
      </label>
      {isEditing ? (
        <>
          <input
            data-testid="modify-input"
            value={modifiedTodo}
            onChange={(e) => {
              setModifiedTodo(e.target.value);
            }}
          />
          <button
            data-testid="submit-button"
            onClick={() => {
              updateTodo(id, { todo: modifiedTodo, isCompleted: true })
                .then(() => {
                  reload();
                })
                .catch((err) => alert(err))
                .finally(() => {
                  setIsEditing(false);
                });
            }}
          >
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            취소
          </button>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <button
            data-testid="modify-button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => {
              deleteTodo(id)
                .then(() => {
                  reload();
                })
                .catch((err) => alert(err));
            }}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
