import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";

export default function MemoList() {
  const memoItems = [
    { id: 1, title: "代办事项 1", content: "这是第一条待办事项的内容" },
    { id: 2, title: "代办事项 2", content: "这是第二条待办事项的内容" },
    { id: 3, title: "代办事项 3", content: "这是第三条待办事项的内容" },
    { id: 4, title: "代办事项 4", content: "这是第四条待办事项的内容" },
  ];

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {memoItems.map((item) => (
        <MemoListItem key={item.id} content={item.content} title={item.title} />
      ))}
    </List>
  );
}
