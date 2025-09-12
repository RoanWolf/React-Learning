import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import toast from "react-hot-toast";

export default function Add() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useLocalStorage("memo-list", []);

  function appendNote(e) {
    e.preventDefault();
    if (!title || !content) return;

    setNotes([...notes, { id: Date.now(), title, content }]);
    toast("Add Successfully");
    setTitle("");
    setContent("");
  }

  return (
    <form style={{ textAlign: "center" }}>
      <div>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          style={{ marginBottom: "20px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" onClick={appendNote}>
          添加
        </Button>
      </div>
    </form>
  );
}
