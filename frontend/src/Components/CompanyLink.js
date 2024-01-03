import React from "react";

export default function CompanyLink({ UserInfo }) {
  return (
    <>
      <div className="section qrc_social_links">
        <ul className="qrc_social_links_list">
          <li className="qr_cc_card">
            <div className="qrc_heading">
              <h2>Links</h2> <p>Find Us Here</p>{" "}
            </div>
            <a
              rel="nofollow noopener noreferrer"
              href={`${UserInfo?.companyWebLink}`}
              target="_blank"
            >
              <div
                className="qrc_social_icon"
                style={{
                  backgroundImage:
                    "url('https://www.qrcodechimp.com/images/digitalCard/weblink.png')",
                }}
              ></div>
              <div className="qrc_social_text">
                <div className="qrc_social_text_heading">Company Website</div>
              </div>
              <div className="qrc_social_action">
                <span className="icon-right_arrow"></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
