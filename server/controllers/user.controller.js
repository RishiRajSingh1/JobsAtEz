import User from "../models/user.model.js";
import createError from "../utils/createError.js";


export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
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