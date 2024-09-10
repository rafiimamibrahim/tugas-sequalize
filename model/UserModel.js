import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Profile from "./ProfileModel.js";
import Book from "./BookModel.js";

const User = db.define(
  // memberikan nama model dengan nama User, secara default jika tidak memberikan tablename dibawah maka akan menjadi nama table yang jamak
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);

// relasi user ke profile

// artinya User hanya memiliki satu Profile
User.hasOne(Profile, {
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

// Profile dimiliki satu User
Profile.belongsTo(User, {
  foreignKey: "UserId",
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

// relasi User ke Book

// artinya User bisa memiliki banyak buku
User.hasMany(Book, {
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

// Buku dimiliki satu User
Book.belongsTo(User, {
  foreignKey: "UserId",
  onDelete: "CASCADE", // Ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus.
  onUpdate: "CASCADE", // Ketika data di tabel referensi diupdate, maka data yang terkait di tabel ini juga akan diupdate.
});

export default User;
