import React from "react";

export default function SocialSection({ UserInfo }) {
  return (
    <>
      <div className="section qrc_social_links">
        <ul className="qrc_social_links_list">
          <li className="qr_cc_card">
            <div className="qrc_heading">
              <h2>Find me Here</h2>{" "}
            </div>
            <a
              rel="nofollow noopener noreferrer"
              href={`${UserInfo?.linkedIn}`}
              target="_blank"
            >
              <div className="qr_social_iconss">
                <div
                  className="qrc_social_icon"
                  style={{
                    backgroundImage:
                      "url('https://www.qrcodechimp.com/images/digitalCard/linkedin_icon@72x.png')",
                  }}
                ></div>
                <div className="qrc_social_text">
                  <div className="qrc_social_text_heading">LinkedIn</div>
                </div>
              </div>
              <div className="qrc_social_action">
                <span className="icon-right_arrow"></span>
              </div>
            </a>
          </li>
          <li className="qr_cc_card">
            <a
              rel="nofollow noopener noreferrer"
              href={`${UserInfo?.instagramLink}`}
              target="_blank"
            >
              <div className="qr_social_iconss">
                <div
                  className="qrc_social_icon"
                  style={{
                    backgroundImage:
                      "url('https://www.qrcodechimp.com/images/digitalCard/insta_icon@72x.png')",
                  }}
                ></div>
                <div className="qrc_social_text">
                  <div className="qrc_social_text_heading">Instagram</div>
                </div>
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
