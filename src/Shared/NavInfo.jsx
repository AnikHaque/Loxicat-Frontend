import bg from "../assets/bg-navInfo.png";
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { RiGlobalLine, RiTwitterXFill } from 'react-icons/ri';

const NavInfo = () => {
    return (
        <div
            className='hidden lg:flex  w-full'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className=" container mx-auto px-[5%] flex justify-between">
                {/* Left Section */}
                <div className='relative flex items-center text-white px-4 py-2'>
                    <div className="flex items-center gap-2">
                        <IoLocationOutline />
                        <h3>531, Dhaka, Bangladesh</h3>
                    </div>
                    <div className='mx-2'>|</div>
                    <div className='flex items-center gap-2'>
                        <CiLocationArrow1 />
                        <h3>example@gmail.com</h3>
                    </div>
                </div>

                {/* Right Section */}
                <div className='relative flex items-center justify-end text-white px-4 py-2 gap-4'>
                    <FaFacebookF className="hover:text-[#00A1E6] cursor-pointer" />
                    <RiTwitterXFill className="hover:text-[#00A1E6] cursor-pointer" />
                    <FiLinkedin className="hover:text-[#00A1E6] cursor-pointer" />
                    <FaGoogle className="hover:text-[#00A1E6] cursor-pointer" />
                    <div className='mx-2'>|</div>
                    <div className="flex items-center gap-2 hover:text-[#00A1E6] cursor-pointer">
                        <RiGlobalLine />
                        <h3>English</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavInfo;
