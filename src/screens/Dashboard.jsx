import React from "react";
import Navbar from "../components/Navbar";
import Header from "./dashboard/Header";
import Section1 from "./dashboard/Section1";
import Section2 from "./dashboard/Section2";
import Section3 from "./dashboard/Section3";
import Hamburger from "../components/Hamburger";

const Dashboard = () => {
  return (
    <>
        {/* <Hamburger/> */}
      <div
        className="display_flex justify_around"
        style={{ height: "100%" }}
      >
        <Navbar />
        <div style={{ width: "70%", height: "90%" }}>
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
