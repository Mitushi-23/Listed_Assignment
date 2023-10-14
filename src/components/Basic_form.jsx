import React from "react";
import { moveToNextTab } from "./BasicTabs";

const Basic_form = (props) => {
  function addDataToJson(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if(name!="" && email!="" && phone!="")
    {

        var newData = {
            name: name,
            email: email,
            phone: phone,
        };
        
        var existingData = [];
        
        
        existingData.push(newData);
        
        localStorage.setItem("jsonData", JSON.stringify(existingData));
        props.moveToNextTab();
    }
  }

  return (
    <>
      <form>
        <div class="row mb-3 vertical_margin">
          <label for="inputName3" class="col-sm-2 col-form-label">
            Enter Name*
          </label>
          <div className="col-sm-10">
            <input
              type="name"
              class="form-control vertical_margin input_border"
              id="name"
              placeholder="Eg. John Doe"
              required
            />
          </div>
        </div>
        <div class="row mb-3 vertical_margin">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Enter Email*
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              class="form-control input_border vertical_margin"
              id="email"
              placeholder="Eg. John@xyz.com"
              required
            />
          </div>
        </div>
        <div class="row mb-3 vertical_margin">
          <label for="inputPhone3" class="col-sm-2 col-form-label">
            Enter Phone*
          </label>
          <div class="col-sm-10 ">
            <input
              type="Phone"
              class="form-control vertical_margin input_border"
              id="phone"
              placeholder="Eg. 0123456789"
              required
            />
          </div>
        </div>

        <div className="display_flex" style={{ justifyContent: "end" }}>
          <button
            type="next"
            className="btn button_bg color_white vertical_margin"
            style={{ fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
            onClick={(event)=>addDataToJson(event)}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Basic_form;
