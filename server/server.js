const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

const http = require("http").Server(app);
const cors = require("cors");

const socketIO = require("socket.io")(http, {
  cors: { origin: "http://localhost:3000" },
});

const AuthRoute = require("./routes/auth");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(
  "mongodb+srv://node_crud:nderitucharles2002@cluster0.ah3dbr5.mongodb.net/api-node"
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established");
});

socketIO.on("connection", (socket) => {
  console.log(`${socket.id} user just connected!`);

  // listens and logs the message to the console
  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT;

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api", AuthRoute);
