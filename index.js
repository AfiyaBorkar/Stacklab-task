const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenev = require('dotenv');
const {dbconnect} = require("./dbconnection");
const userRoutes = require("./routes/userRoutes");
const fileupload = require("express-fileupload");
// import { v2 as cloudinary } from 'cloudinary';
const cloudinary =require('cloudinary').v2;


const app = express();
app.use(express.static(path.resolve(__dirname, './frontend/build')));

dotenev.config();

app.use(cors())
app.use(express.json());
app.use(fileupload({
    useTempFiles:true
}))
cloudinary.config({ 
    cloud_name:process.env.cloudinary_cloud_name  , 
    api_key:process.env.cloudinary_api_key , 
    api_secret: process.env.cloudinary_api_secret 
});


app.use("/api",userRoutes)
dbconnect();



app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend/build/index.html'));
  });
const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log("App is listening server on port no ",port)
})


