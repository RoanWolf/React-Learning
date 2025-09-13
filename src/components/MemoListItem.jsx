import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function MemoListItem({ title, content, handleDelete, id }) {
  const shortContent =
    content.length > 40
      ? content.split(" ").slice(0, 9).join(" ") + "..."
      : content;

  const navigate = useNavigate();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
        onClick={() => navigate(`/memo/${id}`)}
      >
        <ListItemText primary={title} secondary={<>{shortContent}</>} />
      </ListItem>

      <Divider variant="inset" component="li" />
    </>
  );
}
