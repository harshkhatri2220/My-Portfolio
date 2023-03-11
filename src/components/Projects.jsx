import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
function Projects() {

    const links=[
        {
            id : 1,
            src : arrayDestruct,
            Link:"https://harshkhatri2220.github.io/textUtils/",
            codeLink:"https://github.com/harshkhatri2220/textUtils"
            
        },
        {
            id : 2,
            src : installNode,
            Link:"https://harshkhatri2220.github.io/textUtils/",
            codeLink:"https://github.com/harshkhatri2220/textUtils"

        },
        {
            id : 3,
            src : navbar,
            Link:"https://harshkhatri2220.github.io/textUtils/",
            codeLink:"https://github.com/harshkhatri2220/textUtils"

        },
        {
            id : 4,
            src : reactParallax,
            Link:"https://harshkhatri2220.github.io/textUtils/",
            codeLink:"https://github.com/harshkhatri2220/textUtils"


        },
        {
            id : 5,
            src : reactSmooth,
            Link:"https://harshkhatri2220.github.io/textUtils/",
            codeLink:"https://github.com/harshkhatri2220/textUtils"


        },
        {
            id : 6,
            src : reactWeather,
            Link:"https://harshkhatri2220.github.io/textUtils/",
            codeLink:"https://github.com/harshkhatri2220/textUtils"


        },
        
    ];
  return (
    <div name="projects" className=' bg-gradient-to-b from-black to-gray-800 min-h-screen w-full text-white flex justify-center items-center pt-20 md:pb-24'>
        <div className=' max-w-screen-lg   '>
      <div className=' my-5'>
            <h3 className='text-4xl font-bold border-b-4 border-b-gray-500 my-5 inline-block'>Projects</h3>

            <p className=' text-lg'>Check out some of my work..</p>
      </div>



      <div className=' grid grid-cols-2   md:grid-cols-3  gap-8  px-6'>

       { links.map(({id,src,Link,codeLink})=>(
        
            <div key={id} className=' shadow-md shadow-gray-600 rounded-lg   '>
        <a  rel="noreferrer" target={'_blank'} href={Link}> <img  className='rounded-lg hover:scale-105 cursor-pointer duration-300' src={src} alt="" /> </a>

        <div className=' flex items-center justify-center text-lg py-2 font-semibold' >
        <a target={'_blank'} rel="noreferrer" href={codeLink}> <button className=' hover:text-blue-700 duration-150'>
            Code
        </button></a>
        </div>

      </div>
        ))}

        
       
      </div>
      </div>
    </div>
  )
}

export default Projects
