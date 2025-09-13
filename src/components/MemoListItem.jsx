import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
export default function MemoListItem({title, content}) {
  const shortContent = content.length > 40 ? content.split(' ').slice(0, 9).join(' ') + '...' : content;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={title}
          secondary={<>{shortContent}</>}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
