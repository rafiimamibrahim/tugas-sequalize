import Profile from "../model/ProfileModel.js";
import User from "../model/UserModel.js";

export async function getAllProfile(req, res) {
  try {
    console.log("test");
    const data = await Profile.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getProfileById(req, res) {
  const { id } = req.query; // Menggunakan req.query untuk mendapatkan ID
  try {
    const data = await Profile.findOne({
      // Menggunakan findOne untuk mendapatkan profil
      where: { UserId: id },
      include: [
        {
          model: User,
          as: "User",
          required: true,
          attributes: ["name", "email"],
        },
      ],
    });

    if (!data) {
      return res.status(404).send("Profile not found");
    }

    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving profile");
  }
}

export async function createProfile(req, res) {
  const { UserId, bio, profilePicture } = req.body;
  try {
    const newProfile = await Profile.create({ UserId, bio, profilePicture });
    res.status(201).send(newProfile);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating profile");
  }
}

export async function updateProfile(req, res) {
  const { id } = req.query; // Menggunakan req.query untuk mendapatkan ID
  const { bio, profilePicture } = req.body; // Mengambil data yang akan diperbarui
  try {
    const [updated] = await Profile.update(
      { bio, profilePicture },
      {
        where: { UserId: id },
      }
    );
    if (updated) {
      const updatedProfile = await Profile.findOne({ where: { UserId: id } });
      return res.send(updatedProfile);
    }
    return res.status(404).send("Profile not found");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating profile");
  }
}

export async function deleteProfile(req, res) {
  const { id } = req.query; // Menggunakan req.query untuk mendapatkan ID
  try {
    const deleted = await Profile.destroy({
      where: { UserId: id },
    });
    if (deleted === 0) {
      return res.status(404).send("Profile not found");
    }
    res.send("Profile deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting profile");
  }
}
