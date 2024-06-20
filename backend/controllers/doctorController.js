const Doctor=require('../models/doctor.models');

exports.addDoctor=async(req, res)=>{
    try{
        // console.log(req.body);
        // const {speciality, clinic, name, address, phone}=req.body;
        const {arr}=req.body;
        console.log(arr.length)

        let resultArr=[];

        for(let i=0; i<arr.length; i++){
            const {speciality, hospital, name, address, phone}=arr[i];
            console.log(speciality)
            const newDoc=await Doctor.create({
                name,
                speciality,
                address,
                phone,
                hospital:hospital
            })
            console.log(newDoc);
            resultArr.push(newDoc);
        }


        

        

        res.status(200).json({ 
            success:true,
            message:"Doctor added successfully",
            resultArr,
        })
    }
    catch(err){
        return res.status(400).json({
            message:err.message
        })
    }
}

exports.getDoctor=async(req, res)=>{

    try{
        console.log(req.body)
        let {speciality}=req.body;
        
        let allDoc=await Doctor.find({speciality});
        
        res.status(200).json({
            success:true,
            message:"Fetched successfully",
            allDoc,
        })
    }
    catch(err){
        console.log(err.message);
    }


}

exports.getallDoctors=async(req, res)=>{

    try{
        
        
        let allDoc=await Doctor.find();
        
        res.status(200).json({
            success:true,
            message:"Fetched successfully",
            allDoc,
        })
    }
    catch(err){
        console.log(err.message);
    }


}