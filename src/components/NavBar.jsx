import React, { useState } from 'react'
import {FaBars , FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';
const NavBar = () => {
    
   const [Nav,setNav]=useState(false);
            const links=[
                {
                    id: 1,
                    link: 'home'
                },
                {
                    id: 2,
                    link: 'about'
                },
                {
                    id: 3,
                    link: 'projects'
                },
                {
                    id: 4,
                    link: 'technologies'
                },
                {
                    id: 5,
                    link: 'contact'
                }
            ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed' >
      <div>
        <h1 className=' font-signature text-5xl ml-2.5' >Harsh</h1>
      </div>

      <ul className="hidden md:flex">

        {links.map(({id,link})=>(
            
            <li key={id}className=' font-medium px-3 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-150 '>
              <Link to ={link} smooth duration={500}>{link}</Link>
              </li>
        ))}
      </ul>

    <div onClick={()=>setNav(!Nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
       {Nav ?  <FaTimes size={30}/> : <FaBars size={30}/> } 
    </div>

    {Nav && 
    <ul className="flex flex-col justify-center items-center text-gray-500 w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800">

    {links.map(({id,link})=>(
            
            <li  key={id}className=' px-3 cursor-pointer capitalize text-gray-500 hover:scale-110 duration-150 text-4xl py-6'>
              <Link onClick={()=>setNav(!Nav)} to={link} smooth duration={500}>{link}</Link> 
              </li>
        ))}
        {/* <li className=' text-4xl capitalize py-6 cursor-pointer'>home</li> */}
    </ul>}
    
    </div>
  )
}

export default NavBar


// h-screen -> height: 100vh
// w-full width: 100%;