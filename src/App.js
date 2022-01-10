import React from "react";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  const { user } = useSelector((state) => state.registration);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="*"
          element={user ? <Navigate to="/" /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
}
//TODO Rewrite all styles imports with css in js
//TODO optimize Post component rerenders
export default App;
