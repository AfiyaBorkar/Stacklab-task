import React, { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PageLoad from "./PageLoad";
const UserProfileForm = () => {
  const nav = useNavigate();
  const [userid, setUserId] = useState("");
  const [isloading, setisloading] = useState(false);
  const [showpreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    linkedIn: "",
    phoneNumber: "",
    whatsappNumber: "",
    location: "",
    aboutself: "",
    emailAddress: "",
    companyLogo: "",
    instagramLink: "",
    linkedInCompanyLink: "",
    companyWebLink: "",
    companyPhotos: "",
    yourPhoto: "",
    companyrole: "",
    aboutCompany: "",
    companyName: "",
  });
  const handlePreviewClick = () => {
    // Navigate to the /profile/userid route
    nav(`/profile/${userid}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlelogoFileChange = (e) => {
    const { name, files } = e.target;

    // Using a for loop to handle companyLogo
    let companyLogo = null;
    for (let i = 0; i < files.length; i++) {
      companyLogo = files[i];
      break; // Only consider the first file
    }

    setFormData({ ...formData, [name]: companyLogo });
  };

  const handlemulFileChange = (e) => {
    const { name, files } = e.target;
    // console.log(`Multiple files changed for ${name}:`, files);

    // Convert FileList to an array
    const fileArray = Array.from(files);
    setFormData((prevData) => ({ ...prevData, [name]: fileArray }));
  };

  const handleyourpicFileChange = (e) => {
    const { name, files } = e.target;

    // Using a for loop to handle yourPhoto
    let yourPhoto = null;
    for (let i = 0; i < files.length; i++) {
      yourPhoto = files[i];
      break; // Only consider the first file
    }

    setFormData({ ...formData, [name]: yourPhoto });
  };

  const submitData = async (e) => {
    setisloading(true);
    e.preventDefault();

    const requiredFields = [
      "fullName",
      "linkedIn",
      "phoneNumber",
      "whatsappNumber",
      "location",
      "aboutself",
      "emailAddress",
      "companyrole",
      "companyLogo",
      "instagramLink",
      "linkedInCompanyLink",
      "companyWebLink",
      "aboutCompany",
      "companyPhotos",
      "yourPhoto",
      "companyName",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        console.error(`Error: ${field} is required.`);
        return;
      }
    }

    const form = new FormData();

    // Manually set each field in the form
    form.append("fullName", formData.fullName);
    form.append("linkedIn", formData.linkedIn);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("whatsappNumber", formData.whatsappNumber);
    form.append("location", formData.location);
    form.append("aboutself", formData.aboutself);
    form.append("emailAddress", formData.emailAddress);
    form.append("companyrole", formData.companyrole);
    form.append("companyLogo", formData.companyLogo);
    form.append("instagramLink", formData.instagramLink);
    form.append("linkedInCompanyLink", formData.linkedInCompanyLink);
    form.append("companyWebLink", formData.companyWebLink);
    form.append("aboutCompany", formData.aboutCompany);
    form.append("companyName", formData.companyName);

    // Handle multiple files for companyPhotos
    if (Array.isArray(formData.companyPhotos)) {
      for (let i = 0; i < formData.companyPhotos.length; i++) {
        form.append("companyPhotos", formData.companyPhotos[i]);
      }
    }

    // Handle yourPhoto
    if (formData.yourPhoto) {
      form.append("yourPhoto", formData.yourPhoto);
    }

    // console.log("new", form);

    try {
      const config={
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/user`, form,config);

      setShowPreview(true);
      // console.log("Response:", response.data);
      setUserId(response.data.data._id);
      console.log("Data submitted successfully!");

      setisloading(false);

      setFormData({
        fullName: "",
        linkedIn: "",
        phoneNumber: "",
        whatsappNumber: "",
        location: "",
        aboutself: "",
        emailAddress: "",
        companyrole: "",
        companyLogo: "",
        instagramLink: "",
        linkedInCompanyLink: "",
        companyWebLink: "",
        aboutCompany: "",
        companyPhotos: "",
        yourPhoto: "",
        companyName: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isloading ? (
        <PageLoad />
      ) : (
        <div className="container">
          <h2>Profile Form</h2>
          <form>
            {/* User Details Section */}
            <fieldset>
              <legend>User Information</legend>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                LinkedIn Profile:
                <input
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                WhatsApp Number:
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                About Me:
                <textarea
                  name="aboutself"
                  value={formData.aboutself}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email Address:
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Your Position in Company:
                <input
                  type="text"
                  name="companyrole"
                  value={formData.companyrole}
                  onChange={handleInputChange}
                />
              </label>
            </fieldset>

            {/* Company Details Section */}
            <fieldset>
              <legend>Company Information</legend>
              <label>Company Logo:</label>
              <input
                type="file"
                name="companyLogo"
                onChange={handlelogoFileChange}
              />
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
              <label>Instagram Link:</label>
              <input
                type="text"
                name="instagramLink"
                value={formData.instagramLink}
                onChange={handleInputChange}
              />

              <label>Company Phone Number: </label>
              <input
                type="text"
                name="linkedInCompanyLink"
                value={formData.linkedInCompanyLink}
                onChange={handleInputChange}
              />

              <label>Company Website Link:</label>
              <input
                type="text"
                name="companyWebLink"
                value={formData.companyWebLink}
                onChange={handleInputChange}
              />

              <label>About Company :</label>
              <textarea
                name="aboutCompany"
                value={formData.aboutCompany}
                onChange={handleInputChange}
              />

              <label>Company Photos: (4 pics required compulsory)</label>
              <input
                type="file"
                name="companyPhotos"
                onChange={handlemulFileChange}
                multiple
              />
            </fieldset>

            {/* Your Photo Section */}
            <fieldset>
              <legend>Your Photo</legend>
              <label>Your Photo:</label>
              <input
                type="file"
                name="yourPhoto"
                onChange={handleyourpicFileChange}
              />
            </fieldset>
            <div
              className="formbttn"
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <button onClick={submitData}>Submit</button>
              {showpreview ? (
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                  onClick={handlePreviewClick}
                >
                  <VisibilityIcon />
                  Live Preview
                </button>
              ) : null}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UserProfileForm;
