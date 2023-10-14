import React from "react";
import {
  Calendar4,
  Gear,
  PersonCircle,
  PieChart,
  Tags,
} from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar main_bg display_flex flex_column color_white">
        <div>
          <ul style={{ fontSize: "36px", fontWeight: "700" }}>Board.</ul>
          <div>
            <ul className="display_flex align_item_center nav_items">
              <PieChart />
              <p>Dashboard</p>
            </ul>
            <ul className="display_flex align_item_center nav_items">
              <Tags />
              <p>Transactions</p>
            </ul>
            <ul className="display_flex align_item_center nav_items">
              <Calendar4 />
              <p>Schedules</p>
            </ul>
            <ul className="display_flex align_item_center nav_items">
              <PersonCircle />
              <p>Users</p>
            </ul>
            <ul className="display_flex align_item_center nav_items">
              <Gear />
              <p>Settings</p>
            </ul>
          </div>
        </div>
        <div>
          <ul>Help</ul>
          <ul>Contact Us</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
