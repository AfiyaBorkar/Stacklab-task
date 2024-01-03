import React, { createContext, useEffect, useState } from "react";
import "./MyStyle.css";
import ProfileFrontPage from "./ProfileFrontPage";
import ProfileDesc from "./ProfileDesc";
import Contact from "./Contact";
import Gallery from "./Gallery";
import SocialSection from "./SocialSection";
import CompanyLink from "./CompanyLink";
import BottomExtraButtons from "./BottomExtraButtons";
import PopUpPage from "./PopUpPage";
import PageLoad from "./PageLoad";
import { useParams } from "react-router-dom";
import axios from "axios";
export const myContext = createContext();
export default function ProfileDiv() {
  const [openpopup, setOpenpopup] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [UserInfo, setUserInfo] = useState({});
  const { id } = useParams();
  // console.log({id})
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND}/user/${id}`);
      setUserInfo(response.data.data);

      setisloading(false);
      // console.log("response data", response);
    } catch (e) {}
  };
  useEffect(() => {
    fetchData();
   
  }, [id]);

  useEffect(() => {
    // Set document title when UserInfo is available
    if (UserInfo.fullName) {
      document.title = UserInfo.fullName;
    }

   // Set favicon dynamically based on UserInfo.yourphoto
  if (UserInfo.yourphoto) {
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = UserInfo.yourphoto;
    
    // Remove existing favicon if any
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
      document.head.removeChild(existingFavicon);
    }

    document.head.appendChild(favicon);
  }
  }, [UserInfo]);

  // useEffect(() => {
  //   alert("hi")
  // }, [])

  // console.log(UserInfo)

  return (
    <>
      {/* <PageLoad /> */}
      <myContext.Provider
        value={{ openpopup: openpopup, setOpenpopup: setOpenpopup }}
      >
        {!isloading ? (
          openpopup ? (
            <PopUpPage UserInfo={UserInfo} />
          ) : (
            <div className="qrc_page_wrapper thinScrollBar">
              <div
                className="pg_background"
                style={{ backgroundImage: "url('')" }}
              ></div>
              <div className="qrc_page_inner">
                <ProfileFrontPage UserInfo={UserInfo} />
                <ProfileDesc UserInfo={UserInfo} />
                <Contact UserInfo={UserInfo} />
                <Gallery UserInfo={UserInfo} />
                <SocialSection UserInfo={UserInfo} />
                <CompanyLink UserInfo={UserInfo} />
              </div>
              <BottomExtraButtons UserInfo={UserInfo} />
            </div>
          )
        ) : (
          // Show Loader when UserInfo is not available
          <PageLoad />
        )}
      </myContext.Provider>
    </>
  );
}
