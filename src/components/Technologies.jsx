import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import Bootstraplogo from '../assets/Bootstraplogo.png'
const Technologies = () => {

  const techs=[
    {
      id : 1,
      src : html,
        title : "HTML",
      style : "shadow-orange-500"
    },
    
    {
      id : 2,
      src : css,
        title : "CSS",
      style : "shadow-blue-500"
    },
    {
      id : 3,
      src : javascript,
        title : "JavaScript",
      style : "shadow-yellow-500"
    },
    {
      id : 4,
      src : tailwind,
        title : "Tailwind",
      style : "shadow-sky-400"
    },
    {
      id : 5,
      src : node,
        title : "Node",
      style : "shadow-green-500"
    },
    {
      id : 6,
      src : react,
        title : "React",
      style : "shadow-blue-600"
    },
    {
      id : 7,
      src : github,
        title : "Github",
      style : "shadow-gray-500"
    },
    {
      id : 8,
      src : Bootstraplogo,
        title : "Bootstrap",
      style : "shadow-purple-400"
    },
    
    
    
  ];

  return (
    <div
      name="technologies"
      className="flex items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white  min-h-screen w-full py-24 "
    >
      <div className=" max-w-screen-lg">

        <div className="my-5">
          <h3 className=" font-bold text-4xl inline-block border-b-4 border-b-gray-500 my-5 ">
            Technologies
          </h3>
          <p className=" text-lg">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2   md:grid-cols-3  gap-8  px-4 pl-20">

          {
            techs.map(({id,src,title,style})=>(

          <div key={id} className={`flex justify-center items-center flex-col py-3  ${style} shadow-md rounded-lg w-3/4 h-3/4`}>
          <img className=" w-1/3" src={src} alt="" />
          <p className="flex justify-center items-center font-semibold py-3">{title}</p>
          </div>
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default Technologies;
