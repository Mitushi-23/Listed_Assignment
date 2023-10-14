import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn_form = () => {
  const Navigate = useNavigate()
  return (
    <>
      <form className="white_bg form display_flex align_item_center flex_column justify_center" style={{margin:'4% auto 0px'}}>
        <div class="row mb-3 vertical_margin">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form_input_bg vertical_margin"
              id="inputEmail3"
            />
          </div>
        </div>
        <div class="row mb-3 vertical_margin">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control form_input_bg vertical_margin"
              id="inputPassword3"
            />
            <p className="vertical_margin" >

          <a href="/" >Forgot password?</a>
            </p>
          </div>
        </div>
        
        <button
          type="submit"
          className="form-control button_bg color_white vertical_margin"
          style={{ fontWeight: "700", fontSize: "16px", cursor:'pointer' }}
          onClick={()=> Navigate("/home")}
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default SignIn_form;
