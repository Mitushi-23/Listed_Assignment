import React from "react";
import DoughnutChart from "../../components/DoughnutChart";
import BasicModal from "../../components/BasicModal";
import ProfileCard from "../../components/ProfileCard";

const Section3 = () => {
  // console.log(localStorage.getItem("jsonData"));
  const data = localStorage.getItem("jsonData");
  console.log(data)
  return (
    <>
      <div className="sec3_contain vertical_margin display_flex justify_between">
        <div className="Dough_container">
          <DoughnutChart />
        </div>
        <div className="Dough_container">

          {data ? <ProfileCard /> : <BasicModal />}
        </div>
      </div>
    </>
  );
};

export default Section3;
