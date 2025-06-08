import { MdOutlineSettings } from "react-icons/md";

const HomeAboutCard = () => {
  return (
    <div>
      <div className="container mx-auto px-[5%] pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 p-4">
          {/* Card 1 - Skilled Workers with hover effect and background SVG */}

          <div className="group relative">
            <div className="relative flex flex-cols-3 bg-[#fcf8f5] group-hover:bg-[#00A1E6] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1">
               <img src="https://i.postimg.cc/0ypWpJ3J/image-11-1.png" className=" text-[#00A1E6] group-hover:text-white transition-all duration-300"></img>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#00A1E6] mb-[15px] group-hover:text-white transition-all duration-300">
                Skilled Developers
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                Lorem Ipsum is simply dummy text of the printing typesetting indstry. lpsum has been the
                </p>
              </div>
            </div>

            {/* Hide on hover */}
            <div
              className="absolute top-14 right-16 text-[#00A1E6] opacity-20 z-0 animate-ping text-7xl group-hover:hidden"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>

            {/* Hidden by default and only visible on hover */}
            <div
              className="absolute top-14 right-16 text-[#00A1E6] z-0 hidden group-hover:block group-hover:animate-spin text-7xl"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>
          </div>
          {/* Card 2 - Modern Buildings with no hover effect and background SVG */}
          <div className="relative">
            <div
              className="relative flex flex-cols-3 bg-[#00A1E6] p-[30px] border border-gray-100 shadow-sm">
             
              <div className="relative col-span-1">
                <img src="https://i.postimg.cc/LsDxWFm9/image-13.png"></img>
              </div>
              <div className="relative col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-white mb-[15px]">
                  Modern Buildings
                </h2>
                <p className="text-white text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero natus voluptatibus ea repudiandae vero?
                </p>
              </div>
            </div>
            <div
              className="absolute top-14 right-16 text-[#00A1E6] z-0 animate-spin text-7xl"
              style={{
                animationDuration: "3s", // Set your desired duration here
                animationTimingFunction: "ease-in-out", // Optional: Change the timing function
              }}
            >
              <MdOutlineSettings />
            </div>
          </div>

          {/* Card 3 - Quality Service with hover effect and background SVG */}
          <div className="group relative">
            <div className="relative flex flex-cols-3 bg-[#fcf8f5] group-hover:bg-[#00A1E6] p-[30px] border border-gray-100 shadow-sm">
              <div className="group-hover:stroke-white col-span-1">
               <img src="https://i.postimg.cc/3wYL9x5f/image-12.png"></img>
              </div>
              <div className="col-span-2 ml-3 z-10">
                <h2 className="text-2xl font-rajdhani font-bold text-[#00A1E6] mb-[15px] group-hover:text-white transition-all duration-300">
                  Quality Service
                </h2>
                <p className="text-gray-600 text-base font-normal group-hover:text-white transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero natus voluptatibus ea repudiandae vero?
                </p>
              </div>
            </div>

            {/* Hide on hover */}
            <div
              className="absolute top-14 right-16 text-[#00A1E6] opacity-20 z-0 animate-ping text-7xl group-hover:hidden"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>

            {/* Hidden by default and only visible on hover */}
            <div
              className="absolute top-14 right-16 text-[#00A1E6] z-0 hidden group-hover:block group-hover:animate-spin text-7xl"
              style={{
                animationDuration: "3s",
                animationTimingFunction: "ease-in-out",
              }}
            >
              <MdOutlineSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutCard;
