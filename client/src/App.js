import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Header />
      <main className="py-1">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/login"
            element={!user ? <LoginScreen /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <RegisterScreen /> : <Navigate to="/" />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
