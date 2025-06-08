import React, { useState } from 'react';
import { RiArrowDropRightLine } from "react-icons/ri";
import data from "../../../public/work.json";

const SingleService = () => {
  // State to keep track of the selected service
  const [selectedId, setSelectedId] = useState(1);

  // Find the corresponding image based on selectedId
  const selectedImage = data.images.find(image => image.id === selectedId);

  return (
    <div className="min-h-screen px-6 my-28 flex flex-col lg:flex-row justify-center">
      <div className=" w-full lg:w-[30%] flex flex-col gap-8  px-7">
        <div className='w-full h-auto flex flex-col gap-2 items-end'>
        {data.services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedId(service.id)} // Set the selected service id on click
            className={`cursor-pointer flex py-2 items-center text-[16px] pl-5 gap-1 border-2 border-[#E2EBEF] bg-[#EEF4F8] w-[94%] h-[55px] transition-all duration-400 hover:border-l-[6px] hover:text-orange-500 hover:border-l-orange-500 ${
              selectedId === service.id ? 'border-l-[6px] text-orange-500 border-l-orange-500' : 'text-[#40496A]'
            }`}
          >
            <RiArrowDropRightLine className='text-[32px] mt-[1px] ' />
            <p>{service.name}</p>
          </div>
        ))}
   
      </div>
      <div className='border w-[95%] h-auto flex flex-col gap-4 mx-[21px] bg-[#F4F5F8] p-7'>
        
        
        <div className=''>Brochure</div>
        <p>Please click</p>
        <div>download pdf</div>
        
        </div>
      </div>
      {/* Right side (70% on large screens, 100% on small screens) */}
      <div className="w-full lg:w-[55%] flex flex-col items-start gap-7">
        {selectedImage && (
          <img
            src='https://webextheme.com/html/loxicat/images/service/service-details4.jpg'
            alt={`Service ${selectedImage.id}`}
            className="object-cover max-h-[500px] w-full" // Adjust styles as needed
          />
        )}
<h1 className='text-3xl tracking-tighter font-semibold text-gray-900 font-rajdhani'>Service Overview
</h1>
        <p>
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
<br></br>
Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs
        </p>

        <div className='mt-4 mb-10 font-rajdhani'>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900">Project Strategy</h2>
          <p className="mt-2 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>

          <p className="mt-2 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>
        </div>
<div className='mt-4 mb-10 font-rajdhani'>
<h2 className="text-3xl tracking-tighter font-semibold text-gray-900 ">Graphical Overview</h2>
        <img src='https://webextheme.com/html/loxicat/images/service/chart3.jpg'></img>
</div>
        <div className='mt-4 mb-10 font-rajdhani'>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900 ">Project Challenge</h2>
          <p className="mt-2 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Minus corporis minima, maiores. Doloribus ab et 
            repudiandae molestiae. Quibusdam, tempora, amet.
          </p>

         

          {/* Challenges List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 space-y-2 sm:space-y-0 sm:space-x-4 px-5">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Nanotechnology immersion information</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Bring to the table survival strategies</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700 ">Capitalize on low hanging identify</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Leverage agile frameworks to provide</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Nanotechnology immersion information</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Bring to the table survival strategies</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Capitalize on low hanging identify</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500">&#10003;</span>
                <span className="ml-2 text-gray-700">Leverage agile frameworks to provide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;