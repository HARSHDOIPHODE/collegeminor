const mongoose=require('mongoose');

let doctorSchema=new mongoose.Schema(
    {
        name:{
            type:String,
        },
        speciality:{
            type:String,
        },
        hospital:{
            type:String,
        },
        address:{
            type:String,
        },
        phone:{
            type:String,
        },
    }
)

module.exports=mongoose.model("Doctor", doctorSchema);