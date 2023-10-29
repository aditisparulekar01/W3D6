const mongoose =require("mongoose");
const tourSchema= new mongoose.Schema({
    Personname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        Unique:true,
    },
    
    Mobile:{
        type:Number,
        required:true,
        Unique:true,
    },
    
    Tourselected:{
        type:String,
        required:true,
        Unique:true,
    },
    Price:{
        type:Number,
        required:true,       
    },
    

},
{timestamps: true}
);
module.exports=new mongoose.model("tour",tourSchema);