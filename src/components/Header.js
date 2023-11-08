import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../css/Header.css";
import Navigation from "../components/Navigation";
import PrimaryNav from "./PrimaryNav";

const Header = () => {
  return (
    <>
      <PrimaryNav />
      <Navigation />
    </>
  );
};

export default Header;
