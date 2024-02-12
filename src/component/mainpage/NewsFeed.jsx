import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiMenuKebab } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiOutlineUpload } from "react-icons/hi";

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=bitcoin&apiKey=31bf0d3d388c4cf6b472cb8b4cddd32f"
        );

        setNewsData(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const max_char = 1;

  const shortContent = (content) =>
    content && typeof content === "string"
      ? content.length > max_char
        ? content.substring(0, max_char) + "..."
        : content
      : "";

  // Pagination Logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsData.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginateNext = () => setCurrentPage(currentPage + 1);
  const paginatePrev = () => setCurrentPage(currentPage - 1);

  return (
    <div>
      <p className="mt-4 text-[2rem] font-bold pl-12">FOR YOU</p>
      <p className="font-bold pl-12 text-[14px]">The best of everything you</p>
      <div className="flex justify-evenly flex-wrap my-auto">
        {currentArticles.map((article) => (
          <div
            key={article.title}
            className="max-w-[360px] min-w-[250px] lg:h-[760px] sm:h-[500px] md:h-[500px] xl:h-[760px] pb-12 shadow-lg bg-white mx-2 rounded-[15px] my-8"
          >
            <div className="flex justify-between w-full mb-4 mt-8 pl-8 pr-8">
              <p>{article.source.name}</p>
              <CiMenuKebab />
            </div>
            <div className="flex flex-col text-left justify-center">
              <div className="w-full flex justify-center items-center">
                <img
                  src={article.urlToImage}
                  alt=""
                  className="w-[300px] h-[250px] rounded-[15px] mb-4"
                />
              </div>
            </div>
            <div className="flex flex-col text-left justify-center">
              <div className="w-[90%] pl-8 flex flex-col justify-between h-[400px] bg-red text-[14px]">
                <div>
                  <p>7 hours ago</p>
                  <p className="text-[1.2rem] font-bold text-gray-900 my-6">
                    {article.title}
                  </p>
                  <p>{article.author}</p>
                  <p className="my-6 hidden sm:block md:block">{article.description}</p>
                  <p className="hidden sm:block md:block">{shortContent(article.content)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span>
                    <FaRegHeart />
                    <p></p>
                  </span>
                  <span>
                    <RiMessage2Line />
                  </span>
                  <span>
                    <FiPlus />
                    <p></p>
                  </span>
                  <span>
                    <HiOutlineUpload />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination section */}
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button onClick={paginatePrev} className="mx-1 px-3 py-1 bg-[#000] text-[#fff]">
            Prev
          </button>
        )}
        {currentArticles.length === articlesPerPage && (
          <button onClick={paginateNext} className="mx-1 px-3 py-1 bg-[#000] text-[#fff]">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
