import React from "react";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./MyStyle.css";

export default function ProfileFrontPage({ UserInfo }) {
  return (
    <>
      <div className="section qrc_profile_5">
        <div class="qrc_profile_inner">
          <div
            class="qrc_coverimage"
            style={{
              backgroundImage:
                "url('https://www.qrcodechimp.com/images/digitalCard/dbcv2/bg_19.webp')",
            }}
          ></div>
          <div class="qrc_profile_inner_info">
            <h2> {UserInfo?.fullName}</h2>
            <p>{UserInfo?.companyName}</p>
            <p>
              <strong>{UserInfo?.companyrole}</strong>
            </p>
            <div className="qrc_profile_shortcut">
              <ul>
                <li className="qr_cc_card">
                  <a href={`tel:${UserInfo?.phoneNumber}`}>
                    <StayPrimaryPortraitIcon style={{ color: "white" }} />
                  </a>
                </li>
                <li className="qr_cc_card">
                  <a href={`mailto:${UserInfo?.emailAddress}`}>
                    <MailOutlineIcon style={{ color: "white" }} />
                  </a>
                </li>
                <li className="qr_cc_card">
                  <a href={`https://wa.me/${UserInfo?.whatsappNumber}`}>
                    <WhatsAppIcon style={{ color: "white" }} />
                  </a>
                </li>
                <li className="qr_cc_card">
                  <a href="https://maps.app.goo.gl/LaiSBS29Q3QoZoCj7">
                    <LocationOnIcon style={{ color: "white" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="qrc_profilepic"
            style={{
              backgroundImage: `url(${UserInfo?.yourPhoto})`,
            }}
          ></div>
          <div
            className="qrc_profile_brand_logo"
            style={{
              backgroundImage: `url(${UserInfo?.companyLogo})`,
            }}
          ></div>
          <div className="qrc_svg_shape_overlay">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 375 487.8"
              style={{ enableBackground: "new 0 0 375 487.8" }}
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`
        .st0 {
          fill: #fd8031
        }
      `}
              </style>
              <polygon
                className="st1"
                points="382.4,554.9 -8.6,554.9 -8.6,257.9 382.4,398.9 "
                style={{ fill: "#061244" }}
              ></polygon>
              <rect
                x="182"
                y="121.7"
                transform="matrix(0.3448 -0.9387 0.9387 0.3448 -186.7654 389.4778)"
                className="st0"
                style={{ fill: "#fd8031" }}
                width="7.2"
                height="413.7"
              ></rect>
              <rect
                x="315.3"
                y="328.2"
                transform="matrix(0.3374 -0.9414 0.9414 0.3374 -158.1293 560.2241)"
                className="st0"
                style={{ fill: "#fd8031" }}
                width="7.2"
                height="128.4"
              ></rect>
              <rect
                x="303.8"
                y="279.1"
                transform="matrix(0.3412 -0.94 0.94 0.3412 -132.2774 523.5345)"
                className="st0"
                style={{ fill: "#fd8031" }}
                width="7.2"
                height="154.1"
              ></rect>
              <rect
                x="216.3"
                y="-113.9"
                transform="matrix(0.3425 -0.9395 0.9395 0.3425 90.2338 241.7497)"
                className="st0"
                style={{ fill: "#fd8031" }}
                width="3.1"
                height="340.6"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
