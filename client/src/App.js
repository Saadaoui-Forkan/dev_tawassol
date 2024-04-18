import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/dashboard/DashboardScreen";
import CreateProfileScreen from "./screens/dashboard/CreateProfileScreen";
import EditProfileScreen from "./screens/dashboard/EditProfileScreen";
import AddEducationScreen from "./screens/dashboard/AddEducationScreen";
import AddExperienceScreen from "./screens/dashboard/AddExperienceScreen";

function App() {
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

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
          <Route path="dashboard">
            <Route
              index
              element={user ? <DashboardScreen /> : <Navigate to="/" />}
            />
            <Route
              path="create-profile"
              element={
                user ? <CreateProfileScreen /> : <Navigate to="/dashboard" />
              }
            />
            <Route
              path="edit-profile"
              element={
                profile?.length !== 0 ? (
                  <EditProfileScreen />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="add-education"
              element={
                profile?.length !== 0 ? (
                  <AddEducationScreen />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="add-experience"
              element={
                profile?.length !== 0 ? (
                  <AddExperienceScreen />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
          </Route>
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
