import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import AdminNavbar from "../admin/AdminNavbar";
import AdminRight from "../admin/AdminRight";
import MyProduct from "../admin/MyProduct";
// import Addproduct from "../admin/Addproduct";

const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/admin" element={<AdminNavbar />}>
        <Route path="/admin/myproduct" element={<MyProduct />} />
        {/* <Route path="" element={Addproduct} /> */}
      </Route>
    </Routes>
  );
};

export default Auth;
