import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getAllUserById,
  updateUser,
} from "../controllers/UserController.js";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/ProfileController.js";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookShelf,
  updateBook,
} from "../controllers/BookController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("test");
});

// users
router.get("/users", getAllUser);
router.get("/user", getAllUserById);
router.post("/users/create", createUser);
router.put("/users/update", updateUser);
router.delete("/users/Delete", deleteUser);

// profile
router.get("/profiles", getAllProfile);
router.get("/profile", getProfileById);
router.post("/profile", createProfile);
router.put("/profile", updateProfile);
router.delete("/profile", deleteProfile);

// book
router.get("/books", getAllBooks);
router.get("/book", getBookShelf);
router.get("/book", createBook);
router.get("/book", updateBook);
router.get("/book", deleteBook);

export default router;
