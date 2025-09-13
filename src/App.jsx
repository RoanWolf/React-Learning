import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Add from "./components/Add";
import MemoList from "./components/MemoList";
import Search from "./components/Search";
import MemoEdit from "./components/MemoEdit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemoList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
        </Route>

        <Route path="/memo/:id" element={<MemoEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
