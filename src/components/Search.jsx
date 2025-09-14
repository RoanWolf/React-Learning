import TextField from "@mui/material/TextField";
import { useState } from "react";
import MemoList from "./MemoList";
import { useSearchParams } from "react-router-dom";
export default function Search() {
  const [searchParams,setSearchParams] = useSearchParams();
  const [searchContent, setSearchContent] = useState(searchParams.get("q") ||"");
  
  function onChange(e) {
    const { value } = e.target;
    setSearchContent(value);
    setSearchParams({ q: value });
  }
  
  return (
    <>
      <TextField
        label="find your memo"
        color="secondary"
        value={searchContent}
        focused
        fullWidth
        onChange={onChange}
      />
        <MemoList searchContent={searchContent} />
    </>
  );
}
