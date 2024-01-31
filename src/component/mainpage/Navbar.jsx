import React, { useState } from "react";
import fb from "../../assets/fb.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { RxCaretUp } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white-800 py-4 border-b border-[#eeeeee]">
      
        <div className="mx-auto flex justify-between">
          <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <img src={fb} alt="flipboard" className="w-[30px] h-[30px]" />
          </div>

          {/* Nav List */}
          <ul
            className={`lg:flex ${
              isMenuOpen ? "hidden items-center w-full" : "hidden"
            } lg:flex-row space-x-4 ml-8`}
          >
            <li>
              <a href="/" className="text-[#11111199] hover:text-gray-300 font-bold">
                FOR YOU
              </a>
            </li>
            <li>
              <a href="" className="text-[#11111199] hover:text-gray-300 font-bold">
                THE DAILY EDITION
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[#11111199] hover:text-gray-300 font-bold"
              >
                COMMUNITY
              </a>
            </li>
            <li>
            <RxCaretUp />
            </li>
          </ul>
        </div>

        <div className="flex">
          <span className="flex justify-between items-center mr-4">
            <FaSearch />
            <p className="ml-2">SEARCH</p>
          </span>
          <span className="flex justify-between items-center mr-4">
            <IoCreateOutline />
            <p className="ml-2">CREATE A FLIP</p>
          </span>
          <span className="flex justify-between items-center mr-4">
            <LuLayoutGrid />
          </span>
          <span className="flex justify-between items-center mr-4">
            <FaGoogle />
          </span>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
