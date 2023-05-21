const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const editRouter = require("./routes/editRoutes")
const gitRouter= require("./routes/gitRoutes")
const messageRouter =require("./routes/messageRoutes")
const viewcountRoutes =require("./routes/viewCountRoutes")
const cookieParser = require("cookie-parser");
const { auth } = require("./middlewares/authMiddleware");
const { checkRepo } = require('./services/chickRepo')
require('dotenv').config()
const app = express();
try {
  
  (async(app,mongoose)=>{
  await checkRepo()
  await mongoose
    .connect(process.env.mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
  });
  await app.listen(5000, (err) => {
      if (err) {
      console.log(err);
    } else {
      console.log("Server Started Successfully.");
    }
  });
  })(app,mongoose);
} catch (error) {
  console.log(error);
}
 
app.use(cors());
app.use(cookieParser());
app.get('/', (req, res) => {
  res.send("GET Request Called")
})
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/edit",editRouter)
app.use("/git",gitRouter)
app.use("/message",messageRouter)
app.use("/viewcount",viewcountRoutes)
