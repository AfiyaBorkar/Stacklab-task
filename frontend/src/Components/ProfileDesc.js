import React from "react";
import "./MyStyle.css";

export default function ProfileDesc({ UserInfo }) {
  return (
    <>
      <div className="section qrc_heading_text qr_cc_card">
        <h2>About Me</h2> <p>{UserInfo?.aboutself}</p>
      </div>
    </>
  );
}
