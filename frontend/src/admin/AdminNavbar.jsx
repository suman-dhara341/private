import React from "react";
import AdminLeft from "./AdminLeft";
import AdminRight from "./AdminRight";

const AdminNavbar = () => {
  return (
    <div className="grid grid-cols-5 bg-[#f0f0f0]">
      <div className="col-span-1 bg-white">
        <AdminLeft />
      </div>
      <div className="col-span-4">
        <AdminRight />
      </div>
    </div>
  );
};

export default AdminNavbar;
