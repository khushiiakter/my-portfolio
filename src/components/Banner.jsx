import profile from "../assets/profile.JPG"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex pb-10 flex-col items-center  justify-center text-center">
      {/* Profile Image */}
      <div className="avatar mt-4 mb-3">
        <div className="w-[200px] rounded-full ring ring-[#0F1035] ">
          <img
            src={profile} // Replace with your image URL
            alt="Profile"
          />
        </div>
      </div>
{/* 👋 */}
      {/* Introduction */}
      <h1 className="text-2xl mb-6 font-medium text-[#0F1035]">
        Hi! I'm{" "}
        <span className="font-extrabold text-3xl text-[#3c1157]">Khuhsi Akter</span> 
      </h1>
      <p className=" mb-6 md:text-7xl text-4xl font-extrabold text-[#0F1035] ">
        Frontend <br className="md:hidden block" /> Web <span className="underline text-[#4D1876]">Developer</span>
      </p>

      {/* Description */}
      <p className="mb-4 md:text-base text-sm text-gray-800 max-w-[800px] mx-auto">
        Crafting responsive, user-centric web applications with clean code and
        modern design. Passionate about turning ideas into functional and
        visually appealing experiences.
      </p>
      <div className="flex gap-3 mb-4">
        <FaGithub className="text-3xl" />
        <FaLinkedin className="text-3xl" />
        <FaFacebook className="text-3xl" />
        <FaWhatsappSquare className="text-3xl" />
      </div>

      

      {/* Buttons */}
      <div className="flex space-x-4 mt-3">
        <button className="btn  bg-[#0F1035] font-semibold hover:bg-[#5f1a89] text-white px-8 py-3 rounded-full  shadow-md">
          Contact Me
        </button>
        <button className="btn  bg-[#0F1035] font-semibold hover:bg-[#5f1a89] text-white px-8 py-3 rounded-full  shadow-md">
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Banner;
