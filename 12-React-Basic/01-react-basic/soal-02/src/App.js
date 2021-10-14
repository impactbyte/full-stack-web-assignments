import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  function changeTodo(id) {}

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div style={{ padding: "2em 5em" }}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <label>name: </label>
        <input type="text" />
        <br />
        <button type="submit">submit</button>
      </form>

      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div>
          <h2>Unfinish</h2>
          <ul>
            <li>test</li>
          </ul>
        </div>
        <div>
          <h2>Finished</h2>
          <ul>
            <li>test</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
