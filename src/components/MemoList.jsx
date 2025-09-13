import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";
import { useLocalStorage } from "react-use";
import { useEffect, useState } from "react";

export default function MemoList({ searchContent }) {
  const [memoItems, setMemoItems] = useLocalStorage("memo-list", []);
  const [filterItems, setFilterItems] = useState([]);
 
  useEffect(() => {
    if (!searchContent) {
      setFilterItems(memoItems);
      return;
    }
    setFilterItems(
      memoItems.filter((item) =>
        item.title.toLowerCase().includes(searchContent.toLowerCase())
      )
    );
  }, [searchContent]);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {filterItems.map((item) => (
        <MemoListItem key={item.id} content={item.content} title={item.title} />
      ))}
    </List>
  );
}
