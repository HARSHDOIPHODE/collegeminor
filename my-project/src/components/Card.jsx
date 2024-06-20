import React, { useEffect, useState } from 'react'
import docImage from '../assets/doc1.svg'
import docImageFe from '../assets/doctorFe.svg'

const Card = ({name, hospital, address, phone}) => {

    const [showMore, setshowMore] = useState(false)
    const [gender, setgender] = useState('male');
    
    // console.log(name.split(' ').at(1))
    let firstname=name.split(' ').at(1);
   
  return (
    <div className="min-h-[400px] w-[300px] rounded-md border">
  {/* <img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    className="h-[200px] w-full rounded-md object-cover"
  /> */}
   <div className='h-[180px] py-2  flex flex-col items-center justify-center'>

  <img src={docImage} alt="" className='h-[150px]' />
   </div>
  <div className="p-4">
    <h1 className="text-lg font-semibold">{name}</h1>
    <p className="mt-3 text-sm text-gray-600">
        Hospital - {hospital?hospital:"Medical clinic"}
    </p>
    <p className="mt-3 text-sm text-gray-600">
        Hospital Address - {!showMore?address.substr(0, 40):address}
        <span className='text-purple-600' onClick={()=>{
            setshowMore((prev)=> !prev)
        }}>{!showMore?"...Show more":" Show less"}</span>
    </p>
    {/* <button
      type="button"
      className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Contact - {phone}
    </button> */}

    <p className="mt-3 text-sm text-gray-600">Contact Number : {phone}</p>
  </div>
</div>

  )
}

export default Card