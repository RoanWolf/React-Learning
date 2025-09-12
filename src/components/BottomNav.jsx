import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (value === 0) {
      navigate("/");
      return;
    }
    if (value === 1) {
      navigate("/add");
      return;
    }
    if (value === 2) {
      navigate("/search");
      return;
    }
  }, [value]);

  return (
    <Box style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" icon={<AddIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
