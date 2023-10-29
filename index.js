console.log("Hello");
const mongoose = require("mongoose");
const routes=require("./Routes/route.js");

const express=require("express");
const app = express()
app.use(express.json());
app.use("/",routes);
mongoose.connect("mongodb+srv://adiiitiiip:12aditi34@cluster0.lpefwbi.mongodb.net/")
.then(()=>{
    console.log("Database is connected successfully");
})
.catch((err)=>{
    console.log(err,"Something is wrong");
});
//Test API
app.get("/test",(req,res)=>{
    res.send("Hello Everyone,This is Test Api");
});
app.listen(5000,()=>{
 console.log("Server is Running On Port 5000 ");
});