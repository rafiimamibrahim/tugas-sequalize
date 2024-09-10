import Book from "../model/BookModel.js";
import Profile from "../model/ProfileModel.js";
import User from "../model/UserModel.js";
import clean from "./helpers/clean.js";

const createSeeder = async () => {
  await clean();
  const user = await User.create({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const user2 = await User.create({
    name: "Jane Doer",
    email: "johne.doe@bakso.com",
  });

  const profile = await Profile.create({
    age: 30,
    address: "kebon jeruk jalan pinggiran no 13",
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae ex id iure commodi optio sed exercitationem nostrum odit magni? Corporis accusantium consectetur nostrum inventore minus hic itaque cumque? Et.",
    UserId: user.dataValues.id,
  });

  const profile2 = await Profile.create({
    age: 20,
    address: "vila dago jalan pinggiran no 20",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil maxime optio nobis dolorum sequi, similique facere! Veritatis, consequuntur? Asperiores perferendis accusantium alias temporibus ex?",
    UserId: user2.dataValues.id,
  });

  const book = await Book.create({
    name: "Buku masak",
    page: 12,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    UserId: user.dataValues.id,
  });

  const book2 = await Book.create({
    name: "Buku ngoding",
    page: 18,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    UserId: user.dataValues.id,
  });

  const book3 = await Book.create({
    name: "Buku komik",
    page: 30,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    UserId: user2.dataValues.id,
  });

  const foundProfile = await Profile.findOne({
    where: {
      UserId: user.dataValues.id,
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

  const findBookByUser = await Book.findAll({
    where: {
      UserId: user.dataValues.id,
    },
    attributes: ["name", "page", "description"],
    include: [
      {
        model: User,
        as: "User",
        required: true,
        attributes: ["name", "email"],
      },
    ],
  });
  const findBookByUser2 = await Book.findAll({
    where: {
      UserId: user2.dataValues.id,
    },
    attributes: ["name", "page", "description"],
    include: [
      {
        model: User,
        as: "User",
        required: true,
        attributes: ["name", "email"],
      },
    ],
  });

  return {
    user,
    profile,
    book,
    foundProfile,
    findBookByUser,
    findBookByUser2,
  };
};
const { user, profile, book, foundProfile, findBookByUser, findBookByUser2 } =
  await createSeeder();

console.log("profile john");
console.log(foundProfile.dataValues);
console.log("punya si john");
findBookByUser.map((data) => {
  console.log(data.dataValues);
});
console.log("punya si jane");
findBookByUser2.map((data) => {
  console.log(data.dataValues);
});
