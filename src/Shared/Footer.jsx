import { Link } from "react-router-dom";
import logo from "../assets/Footer/email.png";
import email from "../assets/Footer/email.png";
import location from "../assets/Footer/location.png";
import telephone from "../assets/Footer/telephone.png";
import facebook from "../assets/Footer/facebook.png";
import instagram from "../assets/Footer/instagram.png";
import linkedin from "../assets/Footer/linkedin-logo.png";
import twitter from "../assets/Footer/twitter.png";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import toast from "react-hot-toast";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleContactDropdown = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleClick = () => {
    toast.success("This feature is coming soon!");
  };

  return (
    <div className="bg-[#01121e] bg-gradient-to-r from-[#000F1A] to-[#003259] font-rajdhani">
      <footer className="footer text-white p-5 lg:p-[118px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14">
        <aside className="">
          <img
            className="w-[150px] lg:w-[335px] lg:h-[119px] mb-5"
            src='https://i.postimg.cc/JhL0t9VW/360-D-Soul12-2-1.png'
            alt="genesis logo"
          />
          <div className="text-justify text-[#cdcdcd] font-medium">
          GENESIS TECHNOLOGY has adopted the highest standards of IT service and consultancy quality and operational excellence, enabling its clients across a wide range of industries to transform into a truly digital, data-driven enterprise.
          </div>
          <div className="flex gap-3 my-[30px] ">
            <Link
              to="https://www.facebook.com/profile.php?id=61560437951603"
              target="_blank"
            >
              <img src={facebook} className="w-8" alt="360d facebook logo" />
            </Link>
            <Link to="/" onClick={handleClick}>
              <img src={instagram} className="w-8" alt="360d instagram logo" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/360dsoul/posts"
              target="_blank"
            >
              <img src={linkedin} className="w-8" alt="360d linkedin logo" />
            </Link>
            <Link to="/" onClick={handleClick}>
              <img src={twitter} className="w-8" alt="360d twitter logo" />
            </Link>
          </div>
        </aside>

        <nav>
          <div className="text-white text-2xl md:text-4xl font-bold  flex items-center justify-between">
            <button
              onClick={toggleDropdown}
              className="focus:outline-none flex items-center md:hidden justify-between w-full text-xl"
            >
              Solutions
              {isOpen ? (
                <FaChevronUp className="ml-44" />
              ) : (
                <FaChevronDown className="ml-44" />
              )}
            </button>
            <div className="hidden md:flex items-center">
              <div>
                Solutions
                <div className="flex mt-3">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col gap-3 mt-[25px] md:hidden">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                IT Infrastructure
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               Integrated Cyber Security
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               Modern Workplace
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Web Application
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Business Automation
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Internet of Things (IoT)
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Blockchain
              </Link>
            </div>
          )}
          <div className="hidden md:flex flex-col gap-3 mt-[25px]">
          <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                IT Infrastructure
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               Integrated Cyber Security
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               Modern Workplace
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Web Application
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Business Automation
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Internet of Things (IoT)
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Blockchain
              </Link>

          </div>
        </nav>

        <nav>
          <div className="text-white text-2xl md:text-4xl font-bold  flex items-center justify-between">
            <button
              onClick={toggleServicesDropdown}
              className="focus:outline-none flex items-center md:hidden justify-between w-full text-xl"
            >
              Services
              {isServicesOpen ? (
                <FaChevronUp className="ml-[195px]" />
              ) : (
                <FaChevronDown className="ml-[195px]" />
              )}
            </button>
            <div className="hidden md:flex items-center">
              <div>
                Services
                <div className="flex mt-3">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
            </div>
          </div>
          {isServicesOpen && (
            <div className="flex flex-col gap-3 mt-[25px] md:hidden">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               System Design
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                System Consultancy
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
              Procurement & Supply
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Installation, Testing & Commisioning
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               Maintenance
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
             Customer Training
              </Link>
            </div>
          )}
          <div className="hidden md:flex flex-col gap-3 mt-[25px]">
          <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               System Design
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                System Consultancy
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
              Procurement & Supply
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
                Installation, Testing & Commisioning
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
               Maintenance
              </Link>

              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="link link-hover text-[#cdcdcd] text-[18px]"
              >
             Customer Training
              </Link>
          </div>
        </nav>

        <nav>
          <div className="text-white text-2xl md:text-4xl font-bold  flex items-center justify-between">
            <button
              onClick={toggleContactDropdown}
              className="focus:outline-none flex items-center md:hidden justify-between w-full text-xl"
            >
              Contact Us
              {isContactOpen ? (
                <FaChevronUp className="ml-[173px]" />
              ) : (
                <FaChevronDown className="ml-[173px]" />
              )}
            </button>
            <div className="hidden md:flex items-center">
              <div>
                Contact Us
                <div className="flex mt-3">
                  <span className="border-[3px] border-[#00B4D8] w-[25px]"></span>
                  <span className="border-[3px] border-[#0077B6] w-[30px]"></span>
                  <span className="border-[3px] border-[#03045E] w-[35px]"></span>
                </div>
              </div>
            </div>
          </div>
          {isContactOpen && (
            <div className="flex flex-col gap-3 mt-[25px] md:hidden">
              <div className="flex gap-3">
                <img src={location} alt="location" />
                <a href="" className="text-[#cdcdcd] text-[18px]">
                House-1176, 2nd Floor,
Avenue-11, Mirpur DOHS,
Dhaka-1216, Bangladesh
                </a>
              </div>
              <div className="flex gap-3">
                <img src={email} alt="email" />
                <p className="text-[#cdcdcd] text-[18px]">marketing@gtl.com.bd</p>
              </div>
              <div className="flex gap-3">
                <img src={telephone} alt="telephone" />
                <p className="text-[#cdcdcd] text-[18px]">+88-01755690251~53</p>
              </div>
            </div>
          )}
          <div className="hidden md:flex flex-col gap-3 mt-[25px]">
            <p className="text-justify text-[#cdcdcd] font-medium ">
              We’re just a click away, ready to discuss your business needs and
              provide the perfect IT solutions.
            </p>
            <div className="flex gap-3">
              <img className="w-8 h-8" src={location} alt="location" />
              <a href="" className="text-[#cdcdcd] text-[18px]">
              House-1176, 2nd Floor,
Avenue-11, Mirpur DOHS,
Dhaka-1216, Bangladesh
              </a>
            </div>
            <div className="flex gap-3">
              <img src={email} alt="email" />
              <p className="text-[#cdcdcd] text-[18px]">marketing@gtl.com.bd</p>
            </div>
            <div className="flex gap-3">
              <img src={telephone} alt="telephone" />
              <p className="text-[#cdcdcd] text-[18px]">+88-01755690251~53</p>
            </div>
          </div>
        </nav>
      </footer>
      <h5 className="text-center text-gray-50 font-[Inter] text-sm pb-10">
        © 2024 Design & Developed By{" "}
        <Link className="text-green-500" to="https://www.goinnovior.com/" target="_blank">
          <strong>Goinnovior Limited</strong>
        </Link>
      </h5>
    </div>
  );
};

export default Footer;