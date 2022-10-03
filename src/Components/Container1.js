import React from "react";
import "./Container1.css";
import { useNavigate } from "react-router-dom";

function Container1() {
  const navigate = useNavigate();

  return (
    <>
    <div className="complete">
      <div className="image-main">
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T114422Z&X-Amz-Expires=86400&X-Amz-Signature=dfca96da01c38ed510441979978c37ea057731585b4162098d2b9bb002ee6854&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
          alt="image"
        />
      </div>

      <div className="conatiner">
        <div className="headings">
          <div className="i">
            <h1>Imagine if</h1>
          </div>
          <div className="s">
            <h1>
              <label>Snapchat</label>
            </h1>
          </div>
          <div className="h">
            <h1>had events</h1>
          </div>
        </div>
        <div className="para">
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <div className="btn">
          <button onClick={() => navigate("Events")}>🎉Create an event</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Container1;
