import User from "../model/UserModel.js";

export async function getAllUser(req, res) {
  try {
    const data = await User.findAll();

    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUserById(req, res) {
  const id = req.query.id; // Mendapatkan ID dari req.query.id
  console.log(id);
  try {
    const data = await User.findAll({
      where: { id }, // Mencari pengguna berdasarkan ID
    });

    if (data.length === 0) {
      return res.status(404).send("User not found");
    }

    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving user");
  }
}

export async function createUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function updateUser(req, res) {
  try {
    const updatedUser = await User.update(req.body, {
      where: { id: req.query.id },
    });
    if (updatedUser[0] === 0) {
      return res.status(404).send("User not found");
    }
    res.send("User updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating user");
  }
}

export async function deleteUser(req, res) {
  try {
    const deletedUser = await User.destroy({
      where: { id: req.query.id },
    });
    if (deletedUser === 0) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting user");
  }
}
