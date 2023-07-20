import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import UserTrd from "./components/UserTrd";
// import Tes from "./components/Tes";
// import Footer from "./components/Footer";
 
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="user" element={<UserTrd />} />
          {/* <Route path="tes" element={<Footer />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 
export default App;