import React from "react";
import Image from "next/image";


const Skill = ()=>{
    return (
        <>
        <section className="text-gray-600 body-font" id="skill">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">My Skills</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <Image src="https://img.icons8.com/color/48/000000/python--v1.png" height="40" width="40" alt="Python"/>
          <span className="title-font font-medium pl-4">Python</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <Image src="https://img.icons8.com/color/48/000000/javascript--v1.png" height="40" width="40" alt="javaScript"/>
          <span className="title-font font-medium pl-4">JavaScript</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <Image src="https://img.icons8.com/color/48/000000/vue-js.png" height="40" width="40" alt="Vuejs"/>
          <span className="title-font font-medium pl-4">VueJs </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <Image src="https://img.icons8.com/ultraviolet/40/000000/react--v2.png" height="40" width="40" alt="React"/>
          <span className="title-font font-medium pl-4">React Js</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <Image src="https://img.icons8.com/color/48/000000/nodejs.png" height="40" width="40" alt="Node js"/>
          <span className="title-font font-medium pl-4">Node JS</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <Image src="https://img.icons8.com/color/48/000000/amazon-web-services.png" height="40" width="40" alt="AWS"/>
          <span className="title-font font-medium pl-4">AWS</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <Image src="https://img.icons8.com/fluency/48/000000/docker.png" height="40" width="40" alt="Docker"/>
          <span className="title-font font-medium pl-4">Docker</span>
        </div>
      </div>

      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <Image src="https://img.icons8.com/color/48/000000/git.png" height="40" width="40" alt="git"/>
          <span className="title-font font-medium pl-4">Git</span>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>

</>
    );
};

export default Skill;
