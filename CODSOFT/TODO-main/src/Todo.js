import { ListItemText, ListItem, Modal, List, Button } from "@mui/material";
import React, { useState } from "react";
import "./Todo.css";
import db from "./Firebase";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <div>
        <Modal open={open} onClose={(e) => setOpen(false)}>
          <div className="modal">
            <h1>Update Todo</h1>
            <input
              style={{ marginRight: 10, height: 30, paddingLeft: 3 }}
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#21b6ae",
                // padding: "5px px",
                fontSize: "15px",
              }}
              variant="contained"
              onClick={updateTodo}
            >
              Save
            </Button>
          </div>
        </Modal>
      </div>
      <List className="list">
        <ListItem className="todo_list">
          <ListItemText primary={props.todo.todo} />
        </ListItem>
        <EditIcon
          style={{ backgroundColor: "white", color: "black", height: 40 }}
          onClick={(e) => setOpen(true)}
        />

        <DeleteForeverIcon
          fontSize="large"
          style={{ color: "red" }}
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
