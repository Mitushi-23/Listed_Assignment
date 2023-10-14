import React from "react";
import {
  Envelope,
  Instagram,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

const ProfileCard = () => {
  const data = JSON.parse(localStorage.getItem("jsonData"));
  return (
    <>
      <div>
        <div>
          <h5
            class="card-title vertcal_margin"
            style={{ marginLeft: "4%", fontSize: "24px" }}
          >
            {data[0].name}
          </h5>

          <div
            className="display_flex wrap justify_around"
            style={{ columnGap: "20%" }}
          >
            <div
              className="display_flex align_item_center"
              style={{ columnGap: "5px" }}
            >
              <Whatsapp className="icon" style={{color:'#3CC952', backgroundColor:"#E9F9EB"}} />
              <p style={{textDecoration:'underline' , margin:"0px"}}>{data[0].phone}</p>
            </div>
            <div
              className="display_flex align_item_center"
              style={{ columnGap: "5px" }}
            >
              <Instagram className="icon" style={{color:'#FF4E64', backgroundColor:"#FFE9EC"}}/>
              <p style={{textDecoration:'underline' , margin:"0px"}}>{data[1].instagram}</p>
            </div>
            <div
              className="display_flex align_item_center"
              style={{ columnGap: "5px" }}
            >
              <Envelope className="icon" style={{color:'#5C33CF', backgroundColor:"#EBE6F9"}} />
              <p style={{textDecoration:'underline' , margin:"0px"}}>{data[0].email}</p>
            </div>
            <div
              className="display_flex align_item_center"
              style={{ columnGap: "5px" }}
            >
                
              <Youtube className="icon" style={{color:'#FF0000', backgroundColor:"#FFE9E9"}}/>
              <p style={{textDecoration:'underline' , margin:"0px"}}>{data[1].youtube}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
