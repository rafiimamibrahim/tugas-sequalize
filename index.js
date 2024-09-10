import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import router from "./routes/router.js";
import db from "./utils/connection.js";
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// await db.sync(
//   // force digunakan ketika function db.sync dijalankan maka akan mereset semua data yang ada di database
//   { force: true }
// );

// db.sync() adalah function yang digunakan mengecek ketika tabel belum ada maka akan dibuatkan
await db.sync();

app.use(router);

app.listen(port, () => {
  console.log("server is running in port http://localhost:" + port);
});
