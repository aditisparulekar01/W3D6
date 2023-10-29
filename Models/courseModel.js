const mongoose =require("mongoose");
const courseSchema= new mongoose.Schema({
    CourseName:{
        type:String,
        required:true,        
    },
    Coursecode:{
        type:String,
        required:true,
        Unique:true,
    },
    Credits:{
        type:Number,
        required:true,
    },
    Hours:{
        type:Number,
        required:true,       
    },
},
{timestamps: true}
);
module.exports=new mongoose.model("course",courseSchema);
