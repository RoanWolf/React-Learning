import TextField from "@mui/material/TextField";
import MemoListItem from "./MemoListItem";
import { useState } from "react";
import MemoList from "./MemoList";
export default function Search() {
  const [searchContent, setSearchContent] = useState("");
  return (
    <>
      <TextField
        label="find your memo"
        color="secondary"
        value={searchContent}
        focused
        fullWidth
        onChange={(e) => setSearchContent(e.target.value)}
      />
        <MemoList searchContent={searchContent} />
    </>
  );
}
