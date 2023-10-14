import React from "react";
import {
  Apple,
  Discord,
  Github,
  Google,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";
import SignIn_form from "../components/SignIn_form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="container display_flex ">
        <div
          className="board display_flex flex_column justify_center main_bg"
          style={{ flex: 1 }}
        >
          <h6
            className="color_white logo"
            style={{ fontSize: "24px", margin: "0px" }}
          >
            LOGO
          </h6>

          <h1
            className="color_white"
            style={{ margin: "auto 30%", fontSize: "72px" }}
          >
            Board
          </h1>

          {/* </div> */}
          <div className="social_icons display_flex " >
            <Github className="icon_size color_white" />
            <Twitter className="icon_size color_white" />
            <Linkedin className="icon_size color_white" />
            <Discord className="icon_size color_white" />
          </div>
        </div>

        {/* second half */}
        <div className=" display_flex flex_column" style={{ flex: 1 }}>
          <div className="sign_contain">
            <h2 style={{ fontSize: "36px", margin: "0px" }}>Sign In</h2>
            <p>Sign in to your account</p>
            <div
              className="goo_app_contain display_flex vertical_margin justify_between"
            >
              <button className="google_apple_button display_flex align_item_center white_bg color_grey vertical_margin">
                <Google />
                <p className="margin" onClick={()=> Navigate("/home")}>Sign in with google</p>
              </button>
              <button className="google_apple_button display_flex align_item_center white_bg color_grey vertical_margin">
                <Apple />
                <p className="margin" onClick={()=> Navigate("/home")}>Sign in with Apple</p>
              </button>
            </div>
          </div>
          <SignIn_form />
          <p className="text_center color_grey">
            Don't have an account?
            <a href="/">Register here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
