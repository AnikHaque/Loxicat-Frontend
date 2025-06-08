import React from 'react';

const SingleProjectInfo = () => {
  return (
    <div className="space-x-10 font-rajdhani">
      
      {/* Left Section - Image and Description */}
      <div className="col-span-2">
        <img
          src="https://webextheme.com/html/loxicat/images/project/single-project.jpg" 
          alt="Project Work" 
          className="w-[100%] h-full object-cover rounded-md mb-10 "
        />
        <div className="mt-4 mb-10">
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900 ">Project Description</h2>
          <p className="mt-2 text-gray-700 text-justify">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum blanditiis alias, animi quod ea voluptatum, quidem dolorem quis sint labore earum ullam quisquam repellat laudantium. Alias, nesciunt odit! Possimus, molestiae ab omnis pariatur doloremque quia quasi vero nostrum inventore odio voluptatum sed. Ea blanditiis eaque totam esse eos in ipsa?
          </p>
          <br></br>
          <p className="mt-2 text-gray-700 text-justify">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum blanditiis alias, animi quod ea voluptatum, quidem dolorem quis sint labore earum ullam quisquam repellat laudantium. Alias, nesciunt odit! Possimus, molestiae ab omnis pariatur doloremque quia quasi vero nostrum inventore odio voluptatum sed. Ea blanditiis eaque totam esse eos in ipsa?
          </p>
        </div>

         {/* Project Challenge */}
         <div className='mt-4 mb-10'>
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

        {/* Project Solution */}
        <div className='mt-4 mb-10'>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900">Project Solution</h2>
          <p className="mt-2 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>
        </div>

         {/* Project Result */}
         <div className='mt-4 mb-10'>
          <h2 className="text-3xl tracking-tighter font-semibold text-gray-900">Project Result</h2>
          <p className="mt-2 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus, natus numquam unde qui pariatur porro 
            necessitatibus harum libero commodi rem veritatis in nisi vero odit tenetur esse quidem inventore ex. Sunt 
            nam mollitia, accusantium voluptates recusandae dolor isbus the necessitatibus praesentium excepturi earum 
            sint inventore aperiam? Aperiam dolores.
          </p>
        </div>
      </div>

      </div>
  );
};

export default SingleProjectInfo;