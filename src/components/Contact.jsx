import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' flex justify-center items-center bg-gradient-to-b from-black to-gray-800 min-h-screen w-full text-white' >
        <div className='max-w-screen-lg'>
            <div>
                 <h3 className=' text-4xl inline-block my-10 border-b-4 border-b-gray-500 '>Contact</h3>

                 <p className=' text-lg'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center mt-3 '>

                <form action="https://getform.io/f/8e0e95bd-e025-489f-8da0-c76606aad2e2" method='POST' className='flex flex-col '>

                    <input type="text"
                    name='name'
                    placeholder='Enter your name' 
                    className=' p-1 bg-transparent border-white border-2 rounded-md ' />

                    <input type="text"
                    name='email'
                    placeholder='Enter your email'
                    className=' p-1 mt-2 bg-transparent border-2 border-white rounded-md' />
                    
                    <textarea name="message" 
                    id="" cols="30" rows="10"
                   className=' p-1 bg-transparent border-2 border-white rounded-md mt-2 lg:pr-32 '></textarea>

                
                <button className=' flex items-center justify-center mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-md p-2 px-3 hover:scale-110 duration-300'>
                    Let's Talk
                </button>
                    </form>
                

            </div>
        </div>
    </div>
  )
}

export default Contact
