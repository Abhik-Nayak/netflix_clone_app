const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(()=>{
    console.log("connected")
}).catch(err => console.log(err));

app.use("/api/user",userRoutes);
app.listen(5000, () => {
    console.log("server started on port 5000");
  });