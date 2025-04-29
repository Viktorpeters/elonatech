import Users from "../model/Uers.model.js";

export const fetchUsers = async (req, res) => {
  try {
    // find all the users

    const users = await Users.find({});

    return res.status(200).json({
      success: false,
      message: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || "internal server error",
    });
  }
};
