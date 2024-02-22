import React, { useState } from "react";
import fb from "../../assets/fb.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { RxCaretUp } from "react-icons/rx";
import SearchModal from "./Search"
import { setSearchQuery, setLoading, setError } from "../../store/search-slice"
import { useDispatch, useSelector } from "react-redux"; 
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const dispatch = useDispatch();
  // const query = useSelector((state) => state.search.query);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {
    // Open the search modal and handle the search query state
    setIsSearchModalOpen(true);
    dispatch(setLoading(true)); // Set loading state to true
    // Perform search operation here, you may call API to fetch search results
    // After receiving the results, dispatch the setSearchResults action
    // And handle loading and error states accordingly
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
            <FaSearch onClick={handleSearch} />
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

        {isSearchModalOpen && <SearchModal onClose={() => setIsSearchModalOpen(false)} />}
        
      </div>
    </nav>
  );
};

export default Navbar;
