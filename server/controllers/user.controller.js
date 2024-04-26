// controllers/user.controller.js
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

    // Soft delete the user by marking it as inactive
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
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, img, country, phone, desc, isSeller, isActive } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      username,
      email,
      password,
      img,
      country,
      phone,
      desc,
      isSeller,
      isActive,
    }, { new: true });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Could not update user data', error: error.message });
  }
};