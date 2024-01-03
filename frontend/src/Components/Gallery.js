import React from "react";

export default function Gallery({ UserInfo }) {
  return (
    <>
      <div className="section qrc_gallery qr_cc_card">
        <div className="qrc_heading">
          <h2>Fun At {UserInfo?.companyName}</h2>{" "}
          <p>{UserInfo?.aboutCompany}</p>{" "}
        </div>
        <div className="qrc_gallery_wrapper">
          <ul className="qrc_gallery_grid_1">
            <li>
              <a
                rel="nofollow noopener noreferrer"
                href={`${UserInfo?.companyPhotos[3]}`}
                data-lightbox="images-gallery"
              >
                <img
                  className="img-fluid"
                  src={`${UserInfo?.companyPhotos[3]}`}
                  alt="pic1"
                />
              </a>
            </li>
            <li>
              <a
                rel="nofollow noopener noreferrer"
                href={`${UserInfo?.companyPhotos[2]}`}
                data-lightbox="images-gallery"
              >
                <img
                  className="img-fluid"
                  src={`${UserInfo?.companyPhotos[2]}`}
                  alt="pic2"
                />
              </a>
            </li>
            <li>
              <a
                rel="nofollow noopener noreferrer"
                href={`${UserInfo?.companyPhotos[1]}`}
                data-lightbox="images-gallery"
              >
                <img
                  className="img-fluid"
                  src={`${UserInfo?.companyPhotos[1]}`}
                  alt="pic3"
                />
              </a>
            </li>
            <li>
              <a
                rel="nofollow noopener noreferrer"
                href={`${UserInfo?.companyPhotos[0]}`}
                data-lightbox="images-gallery"
              >
                <img
                  className="img-fluid"
                  src={`${UserInfo?.companyPhotos[0]}`}
                  alt="pic4"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
