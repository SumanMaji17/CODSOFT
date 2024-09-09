import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import Todo from "./Todo";
import db from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Zoom from "react-reveal/Zoom";
function App() {
  const [todos, seTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        seTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    seTodos([...todos, input]);
    setInput("");
  };
  return (
    <body>
      <div className="Body">
        <div className="App">
          <Zoom left>
            <h1>What's the Plan for Today🚀</h1>
          </Zoom>

          <form className="form">
            <div className="task-input">
              <FormControl>
                <InputLabel style={{ color: "white" }}>
                  ✅Add Your New Todo
                </InputLabel>
                <Input
                  style={{ color: "white" }}
                  className="input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
              </FormControl>
            </div>
            <Button
              style={{ backgroundColor: "blue", maxHeight: 35 }}
              className="button"
              disabled={!input}
              type="submit"
              size="small"
              onClick={addTodo}
              variant="contained"
            >
              ADD TODO
            </Button>
          </form>

          <ul>
            {todos.map((todo) => (
              <Todo todo={todo} />

              // <li>{todo}</li>
            ))}
          </ul>
        </div>
      </div>
    </body>
  );
}

export default App;
