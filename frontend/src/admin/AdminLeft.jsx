import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";

const dashboardItem = [
  {
    icon: DashboardIcon,
    item: "Dashboard",
    path: "/admin",
  },
  {
    icon: InventoryIcon,
    item: "My Products",
    path: "/admin/myproduct",
  },
  {
    icon: AccountBalanceWalletIcon,
    item: "Fund Raising",
    path: "/admin/fund",
  },
  {
    icon: AssessmentIcon,
    item: "Report",
    path: "/admin/report",
  },
  {
    icon: AccountCircleIcon,
    item: "My Account",
    path: "/admin/myaccount",
  },
  {
    icon: SettingsIcon,
    item: "Settings",
    path: "/admin/setting",
  },
];

const AdminLeft = () => {
  return (
    <div className="flex justify-between flex-col h-screen items-center">
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/3ac8/394e/d6c4dd5ee2b53797b553ea9a376223ef?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K09SlNLhjVuaiUmZDvp0wfhEI9VUsKzQQa5MaY08BWnuvuDVjvftnyM3tDGh3lkX0QlPRunufU1TWXYI6JVhUYZoMBX9ndLIjhpol9mowq54yBC1bimWwA~Fmo1zRw3UXAs0qJsvIa3iJ4M2hy2FENn0NgEZWGZOGaWrmrswwVeswzXXJMayS9Vqt7P8rOWkiGo0YlXjNILQVx4~9Dt6NhH9xSPoZchbItcOhkdFdMprOwg7j1gNxXPz5ppcObEwQcnocDPh4iqQzC2IwV2wCQB2I-R0XN5uFzu~u8UQVv7DM9dP6ADjWk~Fg94lT3UgT9vXSPuPeGTsD14r4HFb1Q__"
          alt=""
          className="p-4 object-cover"
        />
        <div>
          {dashboardItem?.map((item, index) => {
            const Icon = item?.icon;
            return (
              <NavLink
                to={item?.path}
                end
                className={({ isActive }) =>
                  `text-[#49563F] flex items-center px-3 py-4 gap-2 ${
                    isActive ? "bg-[#5AAD181A]" : ("")
                  }`
                }
                key={index}
              >
                <Icon fontSize="small" />
                <p>{item?.item}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="pb-6">
        <button className="bg-[#5AAD18] px-3 py-2 rounded-full w-32 text-white">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminLeft;
