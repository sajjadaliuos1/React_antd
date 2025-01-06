import React from "react";
import { Menu } from "antd";
import { 
  HomeOutlined, 
  DashboardOutlined, 
  UserOutlined, 
  ProfileOutlined, 
  LogoutOutlined 
} from "@ant-design/icons"; // Import icons
import "./Menu.css";
import ContentMenu from "./Content";
import Header from "./Header";
import Footer from "./Footer"; // Import Footer
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="side-menu-container">
     

      <div className="side-menu">
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
              // Handle signout logic here
              console.log("User signed out");
            } else {
              navigate(key);
            }
          }}
          mode="inline"
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            { label: "Dashboard", key: "/dashboard", icon: <DashboardOutlined /> },
            { label: "User List", key: "/user-list", icon: <UserOutlined /> },
            { label: "Profile", key: "/profile", icon: <ProfileOutlined /> },
            { label: "Signout", key: "signout", icon: <LogoutOutlined />, danger: true }
          ]}
        />
      </div>

     

    </div>
  );
}
