import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(404, "User not found."));
    }

    if (req.userId !== user._id.toString()) {
      return next(createError(403, "You can delete only your account!"));
    }

    user.isActive = false;
    await user.save();

    res.status(200).send("User has been deactivated.");
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found.");
    }

    if (!user.isActive) {
      return res.status(403).send("This account has been deactivated.");
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
