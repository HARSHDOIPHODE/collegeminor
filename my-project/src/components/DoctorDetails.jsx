import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import axios from 'axios'
import Card from './Card';

const DoctorDetails = () => {

    const location=useLocation();

    // console.log(location.pathname.split('/').at(-1));
    const speciality=location.pathname.split('/').at(-1);
    
    const [speArr, setspeArr] = useState([])

    

    const fetchData=async()=>{
        try{
           let res=await axios.post('http://localhost:3000/api/v1/getDoctors', {
            speciality:speciality,
           });
           
        //    console.log(res.data);
        setspeArr(res.data.allDoc)
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [location.pathname])
  return (
    <div className='cont max-w-[1000px] mx-auto flex flex-row items-start justify-between flex-wrap gap-4 py-10'>
         {speArr.map((doc, idx)=>{
            return <Card key={idx} {...doc}/>
         })}
    </div>
  )
}

export default DoctorDetails