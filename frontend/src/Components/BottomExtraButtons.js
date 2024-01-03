import React, { useContext } from "react";
import { myContext } from "./ProfileDiv";
import file from "../assests/SuyashWaghate.vcf";

export default function BottomExtraButtons({ UserInfo }) {
  const { openpopup, setOpenpopup } = useContext(myContext);

  const handleDownloadVCard = () => {
    // Replace 'path/to/your/contact.vcf' with the actual path to your .vcf file
    const vCardFilePath = file;

    const a = document.createElement("a");
    a.download = `${UserInfo.fullName}.vcf`;
    a.href = vCardFilePath;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleShareLink = () => {
    const shareText = "Check out my profile!";
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: shareText,
          url: shareUrl,
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that do not support the Share API
      // You can customize this part to open a share dialog for specific social media platforms
      window.open(
        `https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=${encodeURIComponent(
          "Check out my profile!"
        )}&body=${encodeURIComponent(shareUrl)}`
      );
    }
  };
  return (
    <>
      <div className="extra_button_wrapper">
        <div style={{ display: "flex" }}>
          <button
            className="btn "
            id="btn_page_qr_code"
            onClick={() => {
              setOpenpopup(true);
            }}
          >
            <i className="icon-qrcode"></i>
          </button>
          <button
            className="btn "
            id="btn_share_page"
            onClick={handleShareLink}
          >
            <i className="icon-file_upload_1"></i>
          </button>
        </div>

        <a
          rel="nofollow noopener noreferrer"
          href="/"
          className="qrc_addtocontact"
          onClick={handleDownloadVCard}
        >
          <div className="qrc_addtocontact_text">Add to Contact</div>
          <div className="qrc_addtocontact_circle">
            <span className="icon-add_1"></span>
          </div>
        </a>
      </div>
    </>
  );
}
