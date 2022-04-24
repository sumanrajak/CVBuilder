import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profiles from "./pages/Profiles";
import Resume from "./pages/Resume";
import CreateProfile from "./pages/CreateProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/"  element={<Login />}></Route>
          <Route path="/Register"  element={<Register />} />
          <Route path="/Profiles"  element={<Profiles />} />
          <Route path="/Resume/:id"  element={<Resume />} />
          <Route path="/CreateProfile"  element={<CreateProfile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
