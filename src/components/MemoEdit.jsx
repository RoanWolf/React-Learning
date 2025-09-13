import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";

export default function MemoEdit() {
  const { id } = useParams();

  const [notes, setNotes] = useLocalStorage("memo-list", []);

  const note = notes.find((note) => Number(note.id) === Number(id));
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const navigate = useNavigate();

  function updateNote() {
    const newNotes = notes.map((note) => {
      if (Number(note.id) === Number(id)) {
        return {
          ...note,
          title,
          content,
        };
      }
      return note;
    });
    setNotes(newNotes);
    toast.success("updated successfully")
    navigate("/");
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
      <Button variant="contained" onClick={updateNote}>Update</Button>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "absolute",
          right: "50px",
          bottom: "120px",
        }}
        onClick={() => navigate("/")}
      >
        <HomeIcon />
      </Fab>
    </form>
  );
}
