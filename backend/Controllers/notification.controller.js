import User from "../Models/user.model.js";
import Notification from "../Models/notification.model.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const notifications = await Notification.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg",
    });
    await Notification.updateMany({ to: userId }, { read: true });
    res.status(200).json(notifications);
  } catch (error) {
    console.log("Error in get notification controller", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error @ get notifications" });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    const userId = req.user._id;
    if (notification.to.toString() !== userId.toString()) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this notificaiton" });
    }
    await Notification.findByIdAndDelete(notificationId);
    res.status(200).json({ message: "Notification deleted succesfully" });
  } catch (error) {
    console.log("Error in delete notification controller", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error @ delete notifications" });
  }
};

export const deleteAllNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    await Notification.deleteMany({ to: userId });
    res.status(200).json({ message: "All notifications deleted succesfully" });
  } catch (error) {
    console.log("Error in delete all notification controller", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error @ delete all notifications" });
  }
};
