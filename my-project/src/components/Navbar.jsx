import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo7.svg';


const Navbar = () => {

    const [SpecialityArr, setSpecialityArr] = useState([])


    const fetchData=async()=>{
        try{
            const output=await fetch('http://localhost:3000/api/v1/getAllDoctors');
            const res=await output.json();

            let tempArr=[];

            for(let i=0; i<res.allDoc.length; i++){
                let flag=true;
                for(let j=i+1; j<res.allDoc.length; j++){
                    if(res.allDoc[i].speciality==res.allDoc[j].speciality){
                        flag=false;
                        break;
                    }
                }

                if(flag){
                    tempArr.push(res.allDoc[i].speciality);
                }
            }
            // console.log(tempArr);
            // setSpecialityArr[tempArr];
            setSpecialityArr(tempArr);
        }
        catch(err){
            console.log(err.message);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <div className='h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-gray-100 py-2'>
        <div className='max-w-[1000px] mx-auto flex flex-row items-center justify-between'>
            <Link to={'/'}><div className="logo flex flex-row items-end justify-start gap-3">

            <img src={logo} className='h-[30px]'/>
            <div className='text-lg font-semibold'>Wellness 360</div>
            
            </div>
            </Link>

            <div className='relative group'>
                <h1 className='text-lg font-semibold'>Speciality</h1>
                <div className=' w-[350px] bg-gray-600 absolute top-10 rounded-md scale-y-0
                group-hover:scale-y-100 transition-all duration-300 origin-top flex flex-col items-start
                justify-start text-white py-3 px-5 gap-1'>
                    {SpecialityArr.length>0 && SpecialityArr.map((spe, idx)=>{
                        return <Link to={`/docdetails/${spe}`} key={idx}><div >{
                            spe[0].toUpperCase()+spe.substr(1).toLowerCase()}</div></Link>
                    })}
                </div>
            </div>
            <div className='text-lg font-semibold'>Contact us</div>
        </div>
    </div>
  )
}

export default Navbar