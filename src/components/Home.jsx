import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className=' flex bg-gradient-to-b from-black to-gray-800 sm:flex flex-col justify-center items-center w-full h-screen md:flex-row sm:pb-20 '>
        <div className='  max-w-lg' >
            <h2 className=' text-white lg:text-7xl sm:pt-48 md:text-6xl  text-5xl md:pt-0 font-bold pt-24'>I'm a Front-end Developer</h2>
            <p className=' text-gray-500 py-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora architecto reiciendis alias voluptatem nihil earum quasi animi delectus sit, voluptas consequuntur maiores quia assumenda in!</p>

        <button  className=' group bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-3 py-3 text-base font-medium '> <Link to="projects" smooth duration={500}> Projects<BsArrowRightShort size={20}className=' inline group-hover:rotate-90 duration-300'/></Link>  </button>
        </div>
        <div className=''>
            <img className=' rounded-3xl mx-auto w-2/4 md:w-3/4 lg:w-1/2 py-3' src={heroImage} alt="" />            
        </div>
    </div>
  )
}

export default Home
