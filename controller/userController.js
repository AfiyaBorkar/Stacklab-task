const UserModel = require("../modal/user");
const expresshandler = require("express-async-handler");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");

const addUser = expresshandler(async (req, res) => {
  try {
    const {
      fullName,
      linkedIn,
      phoneNumber,
      whatsappNumber,
      location,
      aboutself,
      emailAddress,
      instagramLink,
      linkedInCompanyLink,
      companyWebLink,
      aboutCompany,

      companyrole,
      companyName,
    } = req.body;
    // console.log(req.files);

    const companyLogo = req.files.companyLogo;
    const companyPhotos = req.files.companyPhotos;

    const yourPhoto = req.files.yourPhoto;
    if (!yourPhoto) {
      // Handle the case where 'yourPhoto' is not defined or is undefined
      return res.status(400).json({ error: "Your photo is required." });
    }
    let result1 = await cloudinary.uploader.upload(yourPhoto.tempFilePath);
    let result2 = await cloudinary.uploader.upload(companyLogo.tempFilePath);

    // Handle multiple companyPhotos
    const companyPhotosResults = await Promise.all(
      companyPhotos.map(async (photo) => {
        return await cloudinary.uploader.upload(photo.tempFilePath);
      })
    );
    // console.log("result1", result1);

    //   if (
    //     !linkedIn ||
    //     !phoneNumber ||
    //     !whatsappNumber ||
    //     !location ||
    //     !about ||
    //     !emailAddress ||
    //     !instagramLink ||
    //     !linkedInCompanyLink ||
    //     !companyWebLink

    //   ) {
    //     res.send("All fields must be filled");
    //   }

    //   const userExist = await UserModel.findOne({ emailAddress });
    //   if (userExist) {
    //     res.status(400);
    //     throw Error("User already exist");
    //   }

    const user = await UserModel.create({
      fullName,
      linkedIn,
      phoneNumber,
      whatsappNumber,
      location,
      aboutself,
      emailAddress,
      instagramLink,
      linkedInCompanyLink,
      companyWebLink,
      companyLogo: result2.secure_url,
      yourPhoto: result1.secure_url,
      companyPhotos: companyPhotosResults.map((result) => result.secure_url),
      aboutCompany,
      companyrole,
      companyName,
    });

    const data = await user.save();
    res.json({ data: data, msg: "User data added successfully" });
  } catch (e) {
    res.status(401);
    // throw new Error("Internal server error")
    console.log(e);
  }
});

const fetchUsers = expresshandler(async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const fetchUserById = expresshandler(async (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    const user = await UserModel.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ data: user });
    // console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const updateUser = expresshandler(async (req, res) => {
  try {
    const userId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const existingUser = await UserModel.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUserData = req.body;

    // Check if a new yourPhoto is provided
    if (req.files && req.files.yourPhoto) {
      const newYourPhotoResult = await cloudinary.uploader.upload(
        req.files.yourPhoto.tempFilePath
      );
      updatedUserData.yourPhoto = newYourPhotoResult.secure_url;
    }

    // Check if a new companyLogo is provided
    if (req.files && req.files.companyLogo) {
      const newCompanyLogoResult = await cloudinary.uploader.upload(
        req.files.companyLogo.tempFilePath
      );
      updatedUserData.companyLogo = newCompanyLogoResult.secure_url;
    }

    // Check if new companyPhotos are provided
    if (req.files && req.files.companyPhotos) {
      const newCompanyPhotosResult = await cloudinary.uploader.upload(
        req.files.companyPhotos.tempFilePath
      );
      updatedUserData.companyPhotos = newCompanyPhotosResult.secure_url;
    }

    // Update the user data excluding the photos
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: updatedUserData },
      { new: true }
    );

    res.json({ updatedUser, msg: "Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const deleteUser = expresshandler(async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate the provided ID
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    // Delete the user from the database by ID
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { addUser, fetchUsers, fetchUserById, updateUser, deleteUser };
