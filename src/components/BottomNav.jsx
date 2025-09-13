import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setValue(0);
     
      return;
    }
    if (pathname === "/add") {
      setValue(1);
     
      return;
    }
    if (pathname === "/search") {
      setValue(2);
     
      return;
    }
  }, [pathname]);

  return (
    <Box style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
       
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate("/")}/>
        <BottomNavigationAction label="Add" icon={<AddIcon />}  onClick={() => navigate("/add")}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={() => navigate("/search")} />
      </BottomNavigation>
    </Box>
  );
}
