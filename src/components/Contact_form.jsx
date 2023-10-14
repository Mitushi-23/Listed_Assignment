import React from "react";

const Contact_form = (props) => {

    function addDataToJson() {
        var instagram = document.getElementById("instagram").value;
        var youtube = document.getElementById("youtube").value;
        
    
        var newData = {
          instagram: instagram,
          youtube: youtube,
        };
    
        var existingData = JSON.parse(localStorage.getItem("jsonData"))||[];
        try {
          existingData = JSON.parse(localStorage.getItem("jsonData")) || [];
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
    
        existingData.push(newData);
    
        localStorage.setItem("jsonData", JSON.stringify(existingData));
    
        // alert("Data added to JSON file!");
      }

  return (
    <>
      <form>
        <div class="row mb-3 vertical_margin">
          <label for="inputName3" class="col-sm-2 col-form-label">
            Instagram Link <span className="color_grey">(Optional)</span>
          </label>
          <div className="col-sm-10">
            <input
              type="link"
              class="form-control vertical_margin input_border"
              id="instagram"
              placeholder="Eg. ..instagram.com/username"
            />
          </div>
        </div>
        <div class="row mb-3 vertical_margin">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Youtube Link <span className="color_grey">(Optional)</span>
          </label>
          <div className="col-sm-10">
            <input
              type="link"
              class="form-control input_border vertical_margin"
              id="youtube"
              placeholder="Eg. ..youtube/username"
            />
          </div>
        </div>
        <div
          className="display_flex"
          style={{ justifyContent: "end", columnGap: "5px" }}
        >
          <button
            type="previous"
            className=" btn-1  vertical_margin"
            style={{ fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
            onClick={props.moveToPrevTab}
          >
            Back
          </button>

          <button
            type="submit"
            className="btn button_bg color_white vertical_margin"
            style={{ fontWeight: "600", fontSize: "14px", cursor: "pointer" }}
            onClick={addDataToJson}
          >
            Done
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact_form;
