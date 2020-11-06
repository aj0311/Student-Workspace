//requirements
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose"),
  app = express();

//defined local port for backend server
var port = process.env.PORT || 2000;

//app config
app.use(cors());
app.use(express.json());

//dotenv setup
require("dotenv").config();

//database setup
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//routes require

//routes use

//server port
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
