import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import DeleteIcon from "@material-ui/icons/Delete";
import HomePageMenu from "./HomePageMenu";

export default function SideBar() {
  return (
    // <div>
    <>
      <HomePageMenu />
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<DeleteIcon />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<DeleteIcon />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
    // </div>
  );
}
