import React from 'react';
import { CiHardDrive, CiHeart } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegFileImage, FaTwitter } from 'react-icons/fa';
import { MdOutlineCalendarMonth, MdOutlinePersonOutline } from 'react-icons/md';
import CommentSection from './CommentSection';

const NewsDetailsMain = () => {
  return (
    <div className="container mx-auto max-w-[1200px] mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 font-rajdhani">
      
      {/* Main Blog Post Section */}
      <div className="col-span-2">
        {/* Blog Post Image */}
        <div className="overflow-hidden">
          <img
            src="https://webextheme.com/html/loxicat/images/news/single-news.jpg" // Replace with your image source
            alt="Nanotech Immersion Along The Highway"
            className="w-full h-[600px] object-cover "
          />
        </div>
        
        {/* Post Metadata */}
        <div className="flex items-center text-sm text-gray-500 space-x-2 mt-4">
          <div className='text-lg text-orange-500'> <MdOutlinePersonOutline /></div><span>By <span className="text-orange-500">Admin</span></span> 
          <span className="flex items-center">
            <div className='text-lg text-orange-500'><MdOutlineCalendarMonth /></div>
            18 January, 2019
          </span>
          <span className="flex items-center">
            <div className='text-lg text-orange-500'><CiHeart /></div>
            245 Likes
          </span>
        </div>

        <div className="container mx-auto px-4 py-8">
      {/* Blog Title */}
      <h1 className="text-4xl tracking-tighter font-bold text-gray-900 mb-4">Nanotech Immersion Along The Highway</h1>

      {/* First Paragraph */}
      <p className="text-gray-700  mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatem rerum voluptas harum provident fugiat tempora architecto mollitia quos maiores perspiciatis, obcaecati, placeat aut. Architecto eaque accusamus minima quis in earum dignissimos suscipit esse, saepe repudiandae similique, expedita sed quam dolore impedit deleniti atque, dolorum quasi repellendus quos sapiente.
      </p>

      {/* Quote Box */}
      <div className="bg-gray-100 border-l-4 border-orange-500 p-6 mb-8">
        <p className="text-xl italic text-gray-600 mb-4">
          "Provident fugiat tempora architecto mollitia quos maiores perspiciatis obcaecati placeat aunty koi thako Architecto eaque accusamus minima in earum impedit atque"
        </p>
        <p className="text-gray-800 font-semibold mb-4"><span>- Sophie Brown</span> <span className='text-gray-500 text-sm'>of Google Inc.</span></p>
        
      </div>

      {/* Additional Paragraphs */}
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Necessitatibus dolor eaque officia impedit corporis exercitationem vel nulla iure sequi ipsam.
      </p>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptatem rerum voluptas harum provident fugiat tempora architecto mollitia quos maiores perspiciatis, obcaecati, placeat aut. Architecto eaque accusamus minima quis in earum dignissimos suscipit esse, saepe repudiandae similique, expedita sed quam dolore impedit deleniti atque.
      </p>
    </div>
    <div className="bg-white py-6">
      {/* Related Tags */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-gray-600 font-semibold">Related Tags:</span>
          <div className="inline-block ml-2 ">
            <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded-md text-sm mr-2 hover:bg-[#00A1E6] hover:text-white">
              Consulting
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm mr-2 hover:bg-[#00A1E6] hover:text-white">
              Finance
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm hover:bg-[#00A1E6] hover:text-white">
              Economics
            </span>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex items-center space-x-3">
          <span className="text-gray-600 font-semibold">Share:</span>
          <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-[#00A1E6]">
            <FaFacebookF className="text-orange-500 hover:text-white " />
          </a>
          <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-[#00A1E6]">
            <FaTwitter className="text-orange-500 hover:text-white" />
          </a>
          <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-[#00A1E6]">
            <FaLinkedinIn className="text-orange-500 hover:text-white" />
          </a>
          <a href="#" className="bg-gray-100 p-2 rounded-md hover:bg-[#00A1E6]">
            <FaInstagram className="text-orange-500 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Prev and Next Post */}
      <div className="flex justify-between text-orange-500 font-semibold">
        <a href="#" className="flex items-center font-bold space-x-2 hover:underline">
          <span>&lt; Prev Post</span>
        </a>
        <a href="#" className="flex items-center font-bold space-x-2 hover:underline">
          <span>Next Post &gt;</span>
        </a>
      </div>
    </div>
   
      </div>

      {/* Sidebar Section */}
      <aside className="col-span-1">
      <div className="flex items-center border h-40 bg-gray-100 w-96 px-4 mb-6">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 w-full bg-white focus:outline-none"
      />
      <button className="bg-[#00A1E6] p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.1-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </button>
    </div>
        {/* Categories Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl px-3 font-bold text-black bg-white  pb-4 border-l-4 border-orange-500 pl-2 mt-2">Categories</h2>
          <ul className="mt-4 space-y-6 mb-2">
            <li className="flex items-center border-b  ">
              <span className="text-orange-500"><CiHardDrive /></span>
              <span className="ml-2   font-medium text-base text-gray-600 hover:text-orange-500 ">Business</span>
            </li>
            <li className="flex items-center border-b">
              <span className="text-orange-500"><CiHardDrive /></span>
              <span className="ml-2 font-medium text-base text-gray-600 hover:text-orange-500">Consulting</span>
            </li>
            <li className="flex items-center border-b">
              <span className="text-orange-500"><CiHardDrive /></span>
              <span className="ml-2 font-medium text-base text-gray-600 hover:text-orange-500">Finance</span>
            </li>
            <li className="flex items-center border-b">
              <span className="text-orange-500"><CiHardDrive /></span>
              <span className="ml-2 font-medium text-base text-gray-600 hover:text-orange-500">Corporate</span>
            </li>
            <li className="flex items-center border-b">
              <span className="text-orange-500"><CiHardDrive /></span>
              <span className="ml-2 font-medium text-base text-gray-600 hover:text-orange-500">Conference</span>
            </li>
            <li className="flex items-center border-b">
              <span className="text-orange-500"><CiHardDrive /></span>
              <span className="ml-2 font-medium text-base text-gray-600 hover:text-orange-500">Economics</span>
            </li>
          </ul>
        </div>

        {/* Popular Posts Section */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6">
          <h2 className="text-2xl px-3 font-bold text-black bg-white  pb-4 border-l-4 border-orange-500 pl-2">Popular Posts</h2>
          <ul className="mt-4 space-y-4">
            <li className="text-gray-600">
              <span className="block font-semibold text-black text-lg hover:text-orange-500 ">Business Solution</span>
              <span className="text-sm">26 April, 2019</span>
            </li>
            <li className="text-gray-600">
              <span className="block font-semibold text-black text-lg hover:text-orange-500">Business Solution</span>
              <span className="text-sm">26 April, 2019</span>
            </li>
            <li className="text-gray-600">
              <span className="block font-semibold text-black text-lg hover:text-orange-500">Business Solution</span>
              <span className="text-sm">26 April, 2019</span>
            </li>
            {/* Add more popular posts as needed */}
          </ul>
        </div>
        <div className="container mx-auto px-4 py-8">
      {/* Archives Section */}
      <div className="bg-gray-100 p-6 mb-8">
        <h2 className="text-2xl px-3 font-bold text-black bg-white  pb-4 border-l-4 border-orange-500 pl-2 ">
          <span className="mt-2 ">Archives</span>
        </h2>
        <ul className="space-y-4 mb-2">
          {['January 2019', 'March 2019', 'April 2019', 'June 2019'].map((month, index) => (
            <li key={index} className="flex items-center">
              <span className="text-orange-500 mr-2">
                {/* Insert an icon here, such as a file icon */}
                <FaRegFileImage/>
              </span>
              <a href="#" className="text-black text-lg  hover:text-orange-500">{month}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Section */}
      <div className="bg-gray-100 p-6">
        <h2 className="text-2xl px-3 font-bold text-black bg-white  pb-4 border-l-4 border-orange-500 pl-2 mb-4">
          <span className="text-2xl  font-bold text-black bg-white  pb-4 ">Tags</span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {['Consulting', 'Finance', 'Meeting', 'Travel', 'Business', 'Corporate', 'Investment', 'Tax', 'Economics', 'Management'].map((tag, index) => (
            <span key={index} className="bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded-md text-sm hover:bg-[#00A1E6] hover:text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    
      </aside>

     
    </div>
  );
};

export default NewsDetailsMain;