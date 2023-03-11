import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {
  return (
    
    <div className=' absolute top-[37%] left-0  '>
      <ul className='flex flex-col bg-gradient-to-r  from-gray-600 to-gray-800 fixed'>

        <li className='  hidden lg:flex items-center  px-2 py-3  text-white  ml-[-80px] hover:ml-[0px]  duration-300 h-14 '> 
        <a className='flex items-center justify-between w-full'  rel="noreferrer"  target="_blank"  href="https://www.linkedin.com/in/harsh-khatri2220/"
        >Linkedin <FaLinkedin size={25}className='mx-3 '/></a></li>

        <li className=' hidden lg:flex items-center px-2 py-3 text-white  ml-[-80px] hover:ml-[0px]  duration-300 w-30'> 
        <a className='flex items-center justify-between w-full'   rel="noreferrer"  target="_blank"  href="https://github.com/harshkhatri2220">Github <FaGithub size={25}className='mx-3'/></a></li>

        <li className=' hidden lg:flex items-center  px-2 py-3  text-white  ml-[-80px] hover:ml-[0px]  duration-300 w-30'> 
        <a  className='flex items-center justify-between w-full' rel="noreferrer"  target="_blank"  href="mailto:harshkhatri2022@gmail.com">Mail <HiOutlineMail size={25}className=' mx-3'/></a></li>

        <li className=' hidden lg:flex items-center  px-2 py-3  text-white  ml-[-80px] hover:ml-[0px]  duration-300 w-30'> 
        <a className='flex items-center justify-between w-full'  rel="noreferrer"  target="_blank"  href=" /Harsh_Khatri.pdf" download>Resume <BsFillPersonLinesFill size={25}className=' mx-3'/></a></li>
      </ul>
    </div>
  )
}

export default SocialLinks
