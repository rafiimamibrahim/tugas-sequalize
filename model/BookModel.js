import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Book = db.define(
  "Book",
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
    page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // digunakan untuk mencegah Sequelize mengubah nama tabel menjadi bentuk jamak. dan nama tabel akan sesuai dengan nama model
    freezeTableName: true,
  }
);

export default Book;
