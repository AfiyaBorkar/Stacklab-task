import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
export default function Contact({ UserInfo }) {
  return (
    <>
      <div className="section qrc_contact qr_cc_card">
        <div className="qrc_contact_header">
          <div
            className="qrc_contact_hdr_img"
            style={{
              backgroundImage:
                "url('https://www.qrcodechimp.com/images/digitalCard/contactus.png')",
            }}
          ></div>
          <div className="qrc_contact_hdr_text">Contact Us</div>
        </div>

        <div className="qrc_contact_info">
          <div className="qrc_contact_info_title">Call Us</div>
          <div className="qrc_contact_number">
            <a href={`tel:+91 ${UserInfo?.linkedInCompanyLink}`}>
              +91 {UserInfo?.phoneNumber}
            </a>
          </div>
        </div>

        <div className="qrc_email_info">
          <div className="qrc_email_info_title">Email</div>
          <div className="qrc_email_id">
            <a href={`mailto:${UserInfo?.emailAddress}`}>
              {UserInfo?.emailAddress}
            </a>
          </div>
        </div>

        <div className="qrc_address_info">
          <div className="qrc_address_info_title">Address</div>
          <div className="qrc_address_text">{UserInfo?.location}</div>
          <a
            className="qrc_direction_btn"
            href="https://maps.app.goo.gl/LaiSBS29Q3QoZoCj7"
            target="_blank"
          >
            <NearMeIcon style={{ marginRight: "0.325rem" }} /> Direction
          </a>
        </div>
      </div>
    </>
  );
}
