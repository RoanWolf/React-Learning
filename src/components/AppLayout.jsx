import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import BottomNav from "./BottomNav.jsx";
import { Toaster } from "react-hot-toast";

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <div style={{ marginBottom: "56px", marginTop: "70px", zIndex:"0"}}>
        <Outlet />
      </div>
      
      <BottomNav />

        <Toaster />
    </>
  );
}
