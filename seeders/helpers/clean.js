import Book from "../../model/BookModel.js";
import Profile from "../../model/ProfileModel.js";
import User from "../../model/UserModel.js";

export default async function clean() {
  await User.destroy({
    where: {},
    force: true,
    cascade: true,
    restartIdentity: true,
  });
  await Profile.destroy({
    where: {},
    force: true,
    cascade: true,
  });
  await Book.destroy({
    where: {},
    force: true,
    cascade: true,
  });
}
