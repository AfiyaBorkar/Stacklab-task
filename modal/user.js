const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  fullName: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  whatsappNumber: {
    type: String,
  },
  location: {
    type: String,
  },
  aboutself: {
    type: String,
  },
  emailAddress: {
    type: String,

    // unique: true,
  },
  companyLogo: {
    type: String,
  },
  instagramLink: {
    type: String,
  },
  linkedInCompanyLink: {
    type: String,
  },
  companyWebLink: {
    type: String,
  },
  companyPhotos: {
    type: [String],
  },
  yourPhoto: {
    type: String,
  },
  companyrole: {
    type: String,
  },
  aboutCompany: {
    type: String,
  },
  companyName: {
    type: String,
  },
});

const user = mongoose.model("User", UserModel);

module.exports = user;
