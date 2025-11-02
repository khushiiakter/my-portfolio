import profile2 from "../assets/profile.JPG"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex pb-16 flex-col items-center  justify-center text-center">
      {/* Profile Image */}
      <div className="avatar mt-4 mb-3">
        <div className="w-[180px] rounded-full ring ring-[#0F1035] ">
          <img
            src={profile2}
            alt="Profile"
          />
        </div>
      </div>
{/* 👋 */}
      {/* Introduction */}
      <h1 className="text-2xl mb-6 font-medium text-[#0F1035]">
        Hi! I'm{" "}
        <span className="font-extrabold text-3xl text-[#3c1157]">Khuhsi Akter Hena</span> 
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
       
        <a href="https://github.com/khushiiakter" target="_blank"><FaGithub className="text-3xl" /></a>
        <a href="https://www.linkedin.com/in/khushii-akter-hena" target="_blank"><FaLinkedin className="text-3xl" /></a>
        <a href="https://www.facebook.com/khushiiAkter"><FaFacebook className="text-3xl" /></a> 
        <a href="https://wa.me/+8801538422108" target="_blank"><FaWhatsappSquare className="text-3xl" /></a>
      </div>

      

      {/* Buttons */}
      <div className="flex space-x-4 mt-3">
        <button className="btn  bg-[#0F1035] font-semibold hover:bg-[#5f1a89] text-white px-8 py-3 rounded-full  shadow-md">
          <a href="#contact">Contact Me</a>
        </button>
        <button className="btn  bg-[#0F1035] font-semibold hover:bg-[#5f1a89] text-white px-8 py-3 rounded-full  shadow-md">
         <a href="/Resume_of_Khushi_Akter.pdf" download="Resume_of_Khushi_Akter.pdf" > My Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
