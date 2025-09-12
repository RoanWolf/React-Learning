import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{position: "fixed" , width: "100%" , top: "0" , zIndex: "1"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rowan Memos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
