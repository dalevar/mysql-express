import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const respone = await User.findAll();
    res.status(200).json(respone);
  } catch (error) {
    console.log("Error : ", error.message);
  }
};
export const getUserById = async (req, res) => {
  try {
    const respone = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(respone);
  } catch (error) {
    console.log("Error : ", error.message);
  }
};
export const createUser = async (req, res) => {
  try {
    const { name, email, gender } = req.body;
    console.log(req);
    await User.create({
      name,
      email,
      gender,
    });
    res.status(201).json({ msg: "User created!" });
  } catch (error) {
    console.log("Error : ", error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated!" });
  } catch (error) {
    console.log("Error : ", error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "User deleted!" });
  } catch (error) {
    console.log("Error : ", error.message);
  }
};
