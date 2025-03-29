import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";
import AddProduct from "./Addproduct";

const AdminRight = () => {
  return (
    <div>
      <div className="bg-white flex items-center justify-between p-3 ml-1">
        <DehazeIcon />
        <div className="flex items-center gap-2 mr-4">
          <input
            type="text"
            placeholder="search"
            className="bg-[#F0F0F0] px-4 py-2 w-72 rounded-full outline-none"
          />
          <NotificationsIcon fontSize="small" />
          <Avatar sx={{ width: 26, height: 26 }} />
          <p>Suman Dhara</p>
        </div>
      </div>
      <div className="">
        <Outlet />
        {/* <AddProduct/> */}
      </div>
    </div>
  );
};

export default AdminRight;
