const express = require('express');
const user = require("./routes/user.route.js")
const cors = require('cors');
require('dotenv').config();

const app =express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/user",user)

const PORT =process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is Running at PORT ${PORT}`);
})
