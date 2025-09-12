import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Add from "./components/Add";
import MemoList from "./components/MemoList";
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route element={<AppLayout />} >
          <Route path="/" element={<MemoList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<div/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
