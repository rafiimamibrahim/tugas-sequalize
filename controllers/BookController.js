import Book from "../model/BookModel.js";
import User from "../model/UserModel.js";

export async function getAllBooks(req, res) {
  try {
    const data = await Book.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getBookShelf(req, res) {
  const { id } = req.query;
  try {
    const data = await Book.findAll({
      where: {
        UserId: id,
      },
      include: [
        {
          model: User,
          as: "User",
          required: true,
          attributes: ["name", "email"],
        },
      ],
    });

    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function createBook(req, res) {
  const { title, author, UserId } = req.body;
  try {
    const newBook = await Book.create({ title, author, UserId });
    res.status(201).send(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating book");
  }
}

export async function updateBook(req, res) {
  const { id } = req.query;
  const { title, author, UserId } = req.body;
  try {
    const [updated] = await Book.update(
      { title, author, UserId },
      {
        where: { id },
      }
    );
    if (updated) {
      const updatedBook = await Book.findOne({ where: { id } });
      return res.send(updatedBook);
    }
    return res.status(404).send("Book not found");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating book");
  }
}

export async function deleteBook(req, res) {
  const { id } = req.query;
  try {
    const deleted = await Book.destroy({
      where: { id },
    });
    if (deleted === 0) {
      return res.status(404).send("Book not found");
    }
    res.send("Book deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting book");
  }
}
