import bycrypt from "bcryptjs";
import cloudinary from "cloudinary";

//model imports
import User from "../Models/user.model.js";
import Notification from "../Models/notification.model.js";

export const getUserProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserProfile controller", error.message);
    res.status(500).json({ error: "Internal Server Error @ getUserProfile" });
  }
};

export const getSuggestedUsers = async (req, res) => {
  try {
    const curUser = req.user._id;
    const usersFollowedByMe = await User.findById(curUser).select("following");
    const suggestedUsers = await User.aggregate([
      { $match: { _id: { $nin: [...usersFollowedByMe.following, curUser] } } },
      { $sample: { size: 5 } },
    ]);
    suggestedUsers.forEach((user) => {
      user.password = null;
    });
    res.status(200).json(suggestedUsers);
  } catch (error) {
    console.log("Error in getSuggestedUsers controller", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error @ getSuggestedUsers" });
  }
};

export const followUnfollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUser = await User.findById(req.user._id);
    const userToFollow = await User.findById(id);

    if (id === req.user._id.toString()) {
      return res.status(400).json({ error: "You cannot follow yourself" });
    }

    if (!userToFollow || !currentUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const isFollowing = currentUser.following.includes(id);
    if (isFollowing) {
      await currentUser.updateOne({ $pull: { following: id } });
      await userToFollow.updateOne({ $pull: { followers: req.user._id } });

      //TODO: return the id of user as a response
      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      await currentUser.updateOne({ $push: { following: id } });
      await userToFollow.updateOne({ $push: { followers: req.user._id } });
      const newNotification = new Notification({
        from: req.user._id,
        to: id,
        type: "follow",
      });
      await newNotification.save();

      //TODO: return the id of user as a response
      res.status(200).json({ message: "User followed successfully" });
    }
  } catch (error) {
    console.log("Error in followUnfollowUser controller", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error @ followUnfollowUser" });
  }
};

export const updateUser = async (req, res) => {
  let {
    username,
    fullName,
    email,
    currentPassword,
    newPassword,
    bio,
    link,
    profileImg,
    coverImg,
  } = req.body;

  const curUser = req.user._id;
  try {
    let user = await User.findById(curUser);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (
      (!currentPassword && newPassword) ||
      (currentPassword && !newPassword)
    ) {
      return res
        .status(400)
        .json({ error: "Please provide both current and new password" });
    }

    if (currentPassword && newPassword) {
      const isMatch = await bycrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Current password is invalid" });
      }
      if (newPassword.length < 6) {
        return res
          .status(400)
          .json({ error: "Password must be atleast 6 characters long" });
      }
      const salt = await bycrypt.genSalt(10);
      user.password = await bycrypt.hash(newPassword, salt);
    }

    if (profileImg) {
      if (user.profileImg) {
        const photoId = user.profileImg.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(photoId);
      }
      const uploadedResponse = await cloudinary.uploader.upload(profileImg);
      user.profileImg = uploadedResponse.secure_url;
    }

    if (coverImg) {
      if (user.coverImg) {
        const photoId = user.coverImg.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(photoId);
      }
      const uploadedResponse = await cloudinary.uploader.upload(coverImg);
      user.coverImg = uploadedResponse.secure_url;
    }

    user.username = username || user.username;
    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    user.bio = bio || user.bio;
    user.link = link || user.link;
    console.log(user);
    user = await user.save();
    user.password = null;
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in updateUser controller", error.message);
    res.status(500).json({ error: "Internal Server Error @ updateUser" });
  }
};
