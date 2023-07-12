import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import Tes from "./components/Tes";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="user" element={<Tes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;