import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";

function App() {
  return (
    <BrowserRouter>
      <Alert/>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Landing/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register" element={ <Register/> }/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
