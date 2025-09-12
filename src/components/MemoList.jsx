import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";
import { useLocalStorage } from "react-use";

export default function MemoList() {
  const [memoItems, setMemoItems] = useLocalStorage("memo-list", []);

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {memoItems.map((item) => (
        <MemoListItem key={item.id} content={item.content} title={item.title} />
      ))}
    </List>
  );
}
