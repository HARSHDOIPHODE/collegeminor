const mongoose=require('mongoose');
require('dotenv').config();

const MONGODB_URL="mongodb+srv://hg343860:bansi123@cluster0.06krash.mongodb.net/hospitalManagement";
// console.log(MONGODB_URL);

exports.dbConnect=async()=>{
    try{
        mongoose.connect(MONGODB_URL).then(()=>{
            console.log("DB connetion successfull");
        })
    }
    catch(err){
        console.log(err.message);
    }
}