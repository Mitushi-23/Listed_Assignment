import React from "react";
import {  Tags } from "react-bootstrap-icons";

const Sec1_card = (props) => {
  return (
    <>
      <div class="card ">
        <div class="card-body">
          {/* <Tags className="icon color_white" /> */}
          <i className={`bi bi-${props.icon} icon color_white vertical_margin`}
          style={{backgroundColor:props.bg}}
          ></i>
          <p class="card-text">{props.text}</p>
          <div className="display_flex align_item_center justify_between">
            <p className="amount">{props.amount}</p>
            <p className="badge">{props.badge_value}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec1_card;
