import { GoLink } from "react-icons/go";



const ProjectsCard = ({ image, title, subtitle }) => {
  return (
    <div className="relative group overflow-hidden rounded-none shadow-lg h-full w-96">
      <img
        src={image}
        alt={title}
        className=" w-full  h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300">
        <div className="lg:px-40 mt-44 text-[#ffffff] ">
        <div className="flex items-center justify-center w-16 h-16   rounded-full bg-[#00A1E6]">
        <GoLink/>
				</div>
      
      </div>
      </div>
      <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      
      
        <div className="text-center bg-gradient-to-r from-[#1a120d] via-[#844209] w-full py-3  text-white ">
          <h3 className="text-2xl font-bold mb-2 tracking-tighter hover:text-[#00A1E6] font-rajdhani">{title}</h3>
          <p className="font-bold">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;