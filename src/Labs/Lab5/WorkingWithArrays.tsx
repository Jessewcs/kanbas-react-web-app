import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2024-11-22",
    completed: false,
  });
  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos{" "}
      </a>
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        defaultValue={todo.id}
        className="form-control w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>{" "}
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-create-new-todo"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>{" "}
      <hr />
      <h3>Deleting from an Array</h3>
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input
        className="form-control w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />{" "}
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <input
        defaultValue={todo.id}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        defaultValue={todo.title}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />
      <h3>Update Todo Description</h3>
      <a
        id="wd-desc-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Describe Todo ID = {todo.id}
      </a>
      <input
        className="form-control w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        className="form-control w-50"
        defaultValue={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <hr />
      <a
        id="wd-assignment-status"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completion
      </a>
      <input
        className="form-control w-25 float-start me-5"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <input
        type="checkbox"
        id="wd-assignment-status"
        checked={todo.completed}
        style={{ transform: "scale(3)" }}
        onChange={(e) =>
          setTodo({ ...todo, completed: Boolean(e.target.value) })
        }
      />
      <hr />
    </div>
  );
}
