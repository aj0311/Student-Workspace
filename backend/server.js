//requirements
var express = require("express");
var cors = require("cors");
const connectDB = require("./config/db");
var mongoose = require("mongoose", { useUnifiedTopology: true }),
  app = express();

//defined local port for backend server
var port = process.env.PORT || 2000;

//app config
app.use(cors());
app.use(express.json({ extended: false }));

//dotenv setup
// require("dotenv").config();

// Connect Database
connectDB();

// Define Routes
app.use("/user", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
// app.use('/api/profile', require('./backend/routes/profile'));
// app.use('/api/posts', require('./backend/routes/posts'));
//routes use

//server port
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
