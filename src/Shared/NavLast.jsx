import React, { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";
import { PiMagnifyingGlass } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { IoLocationOutline } from "react-icons/io5";
import { MdAddCall, MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiSearch } from 'react-icons/ci';
import { Link } from "react-router-dom";

const NavLast = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    document.getElementById("my-drawer-4").checked = false;
};

  const toggleDiv = (e) => {
    e.stopPropagation();
    if (!showDiv) {
      setShowDiv(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setShowDiv(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDiv && !event.target.closest('.dropdown')) {
        setIsVisible(false);
        setTimeout(() => {
          setShowDiv(false);
        }, 300);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDiv]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav className="bg-[#F5F5F5] h-[99px]">
        <div className="relative h-full container mx-auto flex flex-wrap justify-between items-center px-[5%] ">
          {/* Left Navigation Links */}
          <ul className="flex space-x-4 flex-wrap h-full text-[17px] font-bold px-4 gap-6">
           
            <Link to='/'>
            <li className="h-full flex items-center hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer">
              Home
            </li>
            </Link>
            <Link to='/about'>
              <li className="h-full flex items-center hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer">
                About
              </li>
            </Link>

            {/* Page Dropdown */}
            <li className="h-full flex items-center hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer relative group/up gap-2">
              Page
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full left-0 hidden group-hover/up:block bg-[#F5F5F5] w-[200px] md:w-52 z-[110]">
                <li className="relative group/down block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all hover:pl-7 duration-300 ease-in-out border-b-2">
                  Our Team
                  <ul className="text-sm border-2 absolute hidden group-hover/down:block bg-[#F5F5F5] w-52 top-0 left-full">
                    <Link to='/team'>
                      <li className="px-4 py-4 hover:bg-[#00A1E6] text-black hover:text-white transition-all duration-300 hover:pl-7 ease-in-out border-b-2">
                        All Members
                      </li>
                    </Link>
                    <Link to='/team-details'>
                      <li className="px-4 py-4 hover:bg-[#00A1E6] text-black hover:text-white transition-all duration-300 hover:pl-7 ease-in-out border-b-2">
                        Team Details
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  Pricing
                </li>
                <Link to='/testimonial'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    Testimonials
                  </li>
                </Link>
                <Link to='/contact'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    Contact Us
                  </li>
                </Link>
                <Link to='/faq'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    FAQs
                  </li>
                </Link>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="gap-2 h-full flex items-center hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer relative group">
              Services
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full left-0 hidden group-hover:block bg-[#F5F5F5] w-[200px] md:w-52 z-[110]">
               <Link to='/all-services'>
               <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                  All Services
                </li>
               </Link>
              <Link to='/single-service'>
              <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                 Single Service
                </li>
              </Link>
              </ul>
            </li>

            {/* Projects Dropdown */}
            <li className="gap-2 h-full flex items-center hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer relative group">
              Projects
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full left-0 hidden group-hover:block bg-[#F5F5F5] w-[200px] md:w-52 z-[110]">
                <Link to='/all-projects'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    All Projects
                  </li>
                </Link>
                <Link to='/project-details'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    Single Project
                  </li>
                </Link>
              </ul>
            </li>

            {/* News Dropdown */}
            <li className="gap-2 h-full flex items-center hover:text-blue-500 transition-all duration-200 ease-linear cursor-pointer relative group">
              News
              <SlArrowDown className="text-[9px] mt-[1px]" />
              <ul className="text-black text-sm absolute top-full right-0 hidden group-hover:block bg-[#F5F5F5] w-[200px] md:w-52 z-[110]">
                <Link to='/all-news'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    All News
                  </li>
                </Link>
                <Link to='/news-details'>
                  <li className="hover:pl-7 block px-4 py-4 hover:bg-[#00A1E6] hover:text-white transition-all duration-300 ease-in-out border-b-2">
                    Single News
                  </li>
                </Link>
              </ul>
            </li>
          </ul>

          {/* Right Search and Menu Icons */}
          <div className="dropdown flex gap-4">
            <button className="text-blue-500" onClick={toggleDiv}>
              <PiMagnifyingGlass size={25} />
            </button>
            <button className="group text-orange-600 h-10 w-10" onClick={toggleSidebar}>
              <div className="h-full w-[90%] flex flex-col justify-center gap-[5px] items-end">
                <div className="bg-[#00A1E6] h-[2px] w-[30%] group-hover:w-full transition-all ease-in-out duration-300"></div>
                <div className="bg-[#00A1E6] h-[2px] w-[50%] group-hover:w-full transition-all ease-in-out duration-300"></div>
                <div className="bg-[#00A1E6] h-[2px] w-[40%] group-hover:w-full transition-all ease-in-out duration-300"></div>
              </div>
            </button>
          </div>
          {showDiv && (
            <div
              className={`border-orange-500 border-[1px] bg-[#F4F4F4] absolute top-full right-4 py-3 w-full md:w-[20%] flex justify-center items-center transition-all ease-in-out duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-full flex justify-center items-center px-4 py-3">
                <input
                  type="text"
                  className="px-4 py-3 text-sm outline-none rounded-md w-[90%] border-[1px] border-orange-600"
                  placeholder="Search..."
                />
                <button className="absolute right-6" onClick={toggleDiv}>
                  <RxCross2 size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="fixed top-0 right-0 w-[70vw] md:w-[20vw] h-full bg-base-200 z-50 shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0">
              <div className="flex flex-col p-4">
                {/* Close button */}
                <button
                  className="self-end mb-4 text-blue-500"
                  onClick={toggleSidebar}
                >
                  <RxCross2 size={24} />
                </button>

                {/* Sidebar content */}
                <ul className="menu  text-base-content min-h-full w-full p-4">
                                   
                                    <li>
                                        <img className="w-52 p-5" src='https://www.gtl.com.bd/img_upload/logo/474.png' alt="title" />
                                    </li>
                                    <div className=" space-y-2">
                                        <h4 className="text-3xl font-bold mt-5">Office Address</h4>
                                        <div className="flex text-lg gap-2 text-center items-center ">
                                            <IoLocationOutline className="text-[#00B0FC] text-xl" />
                                            Dhaka, Bangladesh
                                        </div>
                                        <div className="flex text-lg gap-2 text-center items-center">
                                            <MdOutlineMail className="text-[#00B0FC] text-xl " />
                                            genesis@gmail.com
                                        </div>
                                        <div className="flex text-lg gap-2 text-center items-center">
                                            <MdAddCall className="text-[#00B0FC] text-xl" />
                                            16511 156 2155
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold mt-5">Pinterest</h4>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-4 lg:max-w-72">
                                            <img className="rounded object-cover" src='https://webextheme.com/html/loxicat/images/side-panel/1.jpg' alt="pintarest" />
                                            <img className="rounded object-cover" src='https://webextheme.com/html/loxicat/images/side-panel/2.jpg' alt="pintarest" />
                                            <img className="rounded object-cover" src='https://webextheme.com/html/loxicat/images/side-panel/3.jpg' alt="pintarest" />
                                            <img className="rounded object-cover" src='https://webextheme.com/html/loxicat/images/side-panel/4.jpg' alt="pintarest" />
                                            <img className="rounded object-cover" src='https://webextheme.com/html/loxicat/images/side-panel/5.jpg' alt="pintarest" />
                                            <img className="rounded object-cover" src='https://webextheme.com/html/loxicat/images/side-panel/6.jpg' alt="pintarest" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-bold mt-5">Social List</h4>
                                        <div className="flex gap-5 mt-5">
                                            <FaFacebookF className="bg-[#001D3D] w-10 h-10  text-white text-5xl rounded-full p-3 hover:bg-[#00B0FC]" />
                                            <RiTwitterXFill className="bg-[#001D3D] w-10 h-10  text-white text-5xl rounded-full p-3 hover:bg-[#00B0FC]" />
                                            <FaInstagram className="bg-[#001D3D] w-10 h-10  text-white text-5xl rounded-full p-3 hover:bg-[#00B0FC]" />
                                            <FaGoogle className="bg-[#001D3D] w-10 h-10  text-white text-5xl rounded-full p-3 hover:bg-[#00B0FC]" />
                                        </div>
                                    </div>
                                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavLast;
