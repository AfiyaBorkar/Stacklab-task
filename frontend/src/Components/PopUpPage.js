import React, { useContext } from "react";
import "../index.css";
import html2canvas from "html2canvas";
import { myContext } from "./ProfileDiv";

export default function PopUpPage({ UserInfo }) {
  const { openpopup, setOpenpopup } = useContext(myContext);
  const handleDownloadImage = () => {
    //Use html2canvas to capture the content of the entire body
    html2canvas(document.body).then((canvas) => {
      // Convert the captured content to a data URL (image/png in this case)
      const image = canvas.toDataURL("image/png");

      // Create a temporary link element
      const downloadLink = document.createElement("a");

      //Set the href attribute of the link to the data URL
      downloadLink.href = image;

      //Set the download attribute to specify the default file name
      downloadLink.download = `${UserInfo?.fullName}.png`;

      //Trigger a click on the link to initiate the download
      downloadLink.click();
    });
  };

  return (
    <>
      <style>
        {`
          body {
            background-color: ${openpopup ? "white" : "#061244"};
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
          }
        `}
      </style>
      <div id="qrc_page_qrcode_popup" className={`show `}>
        <button
          className="btn "
          id="btn_page_qr_code_close"
          onClick={() => {
            setOpenpopup(false);
          }}
        >
          <i className="icon-cross"></i>
        </button>

        <div id="qr_profile_section" style={{ padding: "40px 0" }}>
          <div className="qrc_profile_inner_info_popup">
            <div
              className="qrc_profile_pic_popup"
              style={{
                backgroundImage:
                  "url('https://cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/fm/1598683042998_m.jpeg')",
              }}
            ></div>
            <h2>{UserInfo?.fullName}</h2>
            <p>{UserInfo?.companyName}</p>
            <p className="qrc_profile_company">{UserInfo?.companyrole}</p>
          </div>
          <div className="qrc_profile_qrcode_popup">
            <img
              width="200"
              alt="ima"
              crossorigin="anonymous"
              src="//cdn0030.qrcodechimp.com/qr/PROD/65602cedbb198b125148c415/qr/656036335af76421f50d2fb2_t.png?v=1704184287062"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="qr_popup_button_container">
          <a
            href="/"
            className="qrc_addtohomescreen qrc_btn_add_to_home_screen d-none"
          >
            <div className="qrc_action_button_icon">
              <img
                src="https://www.qrcodechimp.com/images/add_to_homescreen.webp"
                alt="images"
              />
            </div>
            <div className="qrc_addtohomescreen_text">Add to Home Screen</div>
          </a>
          <a
            href="/"
            className="qrc_addtohomescreen qrc_btn_add_to_apple_wallet "
          >
            <div className="qrc_action_button_icon">
              <img
                src="https://www.qrcodechimp.com/images/apple_wallet.webp"
                alt="imagesss"
              />
            </div>
            <div className="qrc_addtohomescreen_text">Save to Apple Wallet</div>
          </a>

          <a
            className="qrc_addtohomescreen qrc_btn_save_t0_gallery"
            onClick={handleDownloadImage}
          >
            <div className="qrc_action_button_icon">
              <img
                src="https://www.qrcodechimp.com/images/photo_gallery.webp"
                alt="ima"
              />
            </div>
            <div className="qrc_addtohomescreen_text">Add to Gallery</div>
          </a>
        </div>

        <div className="qrc_addtohome_info" style={{ display: "none" }}>
          <img
            src="/assets/images/add_to_homescreen_1.png"
            className="img-fluid"
            alt="ima"
          />
          <img
            src="/assets/images/add_to_homescreen_2.png"
            className="img-fluid"
            alt="ima"
          />
        </div>
      </div>
    </>
  );
}
