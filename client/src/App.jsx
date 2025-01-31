import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Service } from "./pages/Service";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Components/Navbar";
import { Logout } from "./pages/Logout";
import { Error } from "./Error";
import { AdminLayout } from "./Components/layouts/Admin-Layout";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminUpdate } from "./pages/Admin-Update";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/admin" element = {<AdminLayout/>}>
          <Route path ="users" element={<AdminUsers/>}/>
            <Route path ="contacts" element={<AdminContacts/>}/>
            <Route path="/admin/Users/update/:id" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;