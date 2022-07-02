import React from "react";
import headerStyle from "./module.header.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const header = () => {
  return (
    <div>
      <Navbar className={headerStyle.container}>
        <div className={headerStyle.logo}></div>
        <NavItem className={headerStyle.menu}></NavItem>
      </Navbar>
    </div>
  );
};

export default header;
