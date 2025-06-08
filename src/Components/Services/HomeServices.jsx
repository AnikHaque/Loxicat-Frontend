import { FaArrowRightLong } from "react-icons/fa6";
import data from "../../../public/AllServices.json";

import './HomeService.css';

const HomeServices = () => {
  return (
    <div className="home-services">

    <div className=" container mx-auto  px-[5%] py-20">
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          ::selection {
            background-color: orange; /* Change to your desired selection color */
            color: white; /* Change text color if needed */
          }

          /* For Firefox */
          ::-moz-selection {
            background-color: orange; /* Change to your desired selection color */
            color: white; /* Change text color if needed */
          }
        `}
      </style>

      <div className="mb-16">
            <h1 className="font-semibold text-lg font-rajdhani text-[#00A1E6] underline pb-3.5 text-center  ">
            Services We Offer
            </h1>
            <h2 className="text-5xl  text-center font-bold font-rajdhani leading-[58px] mb-10 text-white">
            We Provide The Best Service <br /> For Your Business
            </h2>
          </div>

      <div className="my-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-lg bg-white 
            shadow-[rgba(0,0,0,0.2)_3px_3px_10px_1px,_rgba(0,0,0,0.2)_-3px_-3px_10px_1px] p-3 h-[370px] w-[370px] overflow-hidden transition-all duration-300 hover:-translate-y-2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-5 rounded-lg transition-transform duration-500 transform group-hover:scale-110 group-hover:translate-x-4"
              style={{
                backgroundImage: `url('https://i.postimg.cc/7Z0qNpM4/bg1.png')`,
              }}
            />
            <div className="flex flex-col p-6 gap-5">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-full h-20 w-20"
                style={{ animation: "heartbeat 1s infinite" }} // Apply heartbeat animation
              />
              <h2 className="relative text-2xl font-bold hover:text-orange-500 z-10 cursor-pointer transition-all duration-300 font-rajdhani">
                {service.title}
              </h2>
              <p className="text-[#76767A] text-[17px] z-10">
                {service.description}
              </p>
              <span className="flex text-[#00A1E6]">
                <a
                  href="#"
                  className="relative underline hover:no-underline z-10"
                >
                  Read More
                </a>
                <FaArrowRightLong className="mt-[6px] ml-3" />
              </span>
            </div>

            {/* Overlay */}
            <div className="rounded-t-[50%] absolute bottom-0 left-0 right-0 top-[97%] bg-[#00A1E6] opacity-10 transition-all duration-500 transform group-hover:top-0 group-hover:rounded-none" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomeServices;
