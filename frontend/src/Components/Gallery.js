import React from "react";

export default function Gallery({ UserInfo }) {
  const renderGalleryItems = () => {
    return UserInfo?.companyPhotos?.map((photo, index) => (
      <li key={index}>
        <a
          rel="nofollow noopener noreferrer"
          href={photo}
          data-lightbox="images-gallery"
        >
          <img className="img-fluid" src={photo} alt={`pic${index + 1}`} />
        </a>
      </li>
    ));
  };

  return (
    <>
      <div className="section qrc_gallery qr_cc_card">
        <div className="qrc_heading">
          <h2>Fun At {UserInfo?.companyName}</h2>{" "}
          <p>{UserInfo?.aboutCompany}</p>{" "}
        </div>
        <div className="qrc_gallery_wrapper">
          <ul className="qrc_gallery_grid_1">{renderGalleryItems()}</ul>
        </div>
      </div>
    </>
  );
}
