import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar   ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <ul className="menu menu-horizontal  px-1 ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Me</a>
              </li>

              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Contact Me</a>
              </li>
            </ul>
          </ul>
        </div>
        <a className="flex items-center gap-1 md:text-2xl font-bold">
          <img src="" className="h-7" alt="" />
          Service Review
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold  px-1 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="md:block hidden"></div>
      <div className="navbar-end">
        <Link className="py-2 mr-2 text-white bg-[#0F1035] font-semibold hover:bg-[#5f1a89] rounded-full px-5  hover:border-white ">
         Download 
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
