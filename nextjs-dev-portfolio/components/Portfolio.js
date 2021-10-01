import React from "react";
import Image from "next/image";
import PortfolioSite from '../public/portfolio.png';

const Portfolio = ()=>{
    return (
        <>
        <section className="text-gray-600 body-font" id="project">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Following are the some of my Side Projects With Vue, Nuxt js, React, Nextjs, node js, MongoDB and other latest Frameworks and Technologies</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col">
        <div className="bg-gray-100 p-6 rounded-lg flex-1">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">JavaScript</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Project One</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate aliquet pellentesque. Nulla vitae quam vitae nisi fermentum laoreet nec ut est. Nunc ornare enim et tincidunt bibendum. Phasellus faucibus lectus eget fermentum gravida.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col">
        <div className="bg-gray-100 p-6 rounded-lg flex-1">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">JavaScript</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Project Two</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate aliquet pellentesque. Nulla vitae quam vitae nisi fermentum laoreet nec ut est. Nunc ornare enim et tincidunt bibendum. Phasellus faucibus lectus eget fermentum gravida. </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col">
        <div className="bg-gray-100 p-6 rounded-lg flex-1">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">JavaScript</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Project Three</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate aliquet pellentesque. Nulla vitae quam vitae nisi fermentum laoreet nec ut est. Nunc ornare enim et tincidunt bibendum. Phasellus faucibus lectus eget fermentum gravida. </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col">
        <div className="bg-gray-100 p-6 rounded-lg flex-1">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">JavaScript, TypeScript</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Project Four</h2>
          <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate aliquet pellentesque. Nulla vitae quam vitae nisi fermentum laoreet nec ut est. Nunc ornare enim et tincidunt bibendum. Phasellus faucibus lectus eget fermentum gravida. </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    );
};

export default Portfolio;
