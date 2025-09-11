import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
export default function MemoListItem({title, content}) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={title}
          secondary={<>{content}</>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
