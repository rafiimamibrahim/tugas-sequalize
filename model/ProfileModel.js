import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Book from "./BookModel.js";

const Profile = db.define(
  // memberikan nama model dengan nama Profile, secara default jika tidak memberikan tablename dibawah maka akan menjadi nama table yang jamak
  "Profile",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "profile",
  }
);

export default Profile;
