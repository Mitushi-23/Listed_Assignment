import React from "react";
import { Bell, Person, Search } from "react-bootstrap-icons";
import {  useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div
        className="header_contain display_flex align_item_center justify_between"
      >
        <div>
          <h1>Dashboard</h1>
        </div>
        <div className="display_flex justify_evenly align_item_center"
        style={{width:'400px'}}
        >
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              style={{width:'250px'}}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Search className="color_grey" />
          </form>
            <Bell />
            <Person onClick={()=>Navigate("/")} />
        </div>
      </div>
    </>
  );
};

export default Header;
