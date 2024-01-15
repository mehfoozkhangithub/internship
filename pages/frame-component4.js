import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./frame-component4.module.css";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrameComponent4 = () => {
  const [blogs, setBlogs] = useState([]);
  const [ad, setAd] = useState(null);
  const blogsPerPage = blogs.length;
  const [currentPage, setCurrentPage] = useState(1);
  const apiUrl = process.env.api;
  const carouselRef = useRef(null);
  const router = useRouter();
  const defaultImage =
    "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/post/products`);
        setBlogs(response.data.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
    const fetchAd = async () => {
      // Change from fetchAds to fetchAd
      try {
        const response = await axios.get(`${apiUrl}/api/mainads/Featured Ads`);
        setAd(response.data[0]); // Set only the first ad
      } catch (error) {
        console.error("Error fetching ad:", error);
      }
    };

    fetchAd();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      // If on the first page, loop to the last page
      setCurrentPage(totalPages);
    }
  };

  const handleBlogClick = (blogId) => {
    router.push(`/category/products?id=${blogId}`);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      // If on the last page, loop to the first page
      setCurrentPage(1);
    }
  };

  const renderBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = blogs.slice(startIndex, endIndex);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="">
        <Slider {...settings}>
          {visibleBlogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => handleBlogClick(blog.id)}
              className=" h-[400px] 2xl:h-[464px]  mx-2 text-center  w-[30%] py-3 pr-3 text-black cursor-pointer "
            >
              <div className="h-[90%] m-3 bg-transparent  rounded-3xl hover:transform hover:scale-110 duration-200   border border-solid border-[#e0e0e0] shadow-xl  overflow-hidden   text-black  ">
                <div className="h-[60%] flex justify-center items-center pt-2  rounded-t-3xl ">
                  <img
                    src={blog.image || defaultImage}
                    alt=""
                    className="w-[90%] object-fill h-full text-center rounded-2xl "
                  />
                </div>
                <div className="rounded-b-3xl  h-[30%] p-1 2xl:mt-3 ">
                  <div className="text-mini min-2xl:text-6xl   font-medium 2xl:font-semibold font-poppins mb-0  pl-2 mt-1">
                    {truncateWords(blog.title, 4)}
                  </div>
                  <div
                    className="2xl:text-mini 2xl:pb-1 2xl:font-medium pl-1"
                    dangerouslySetInnerHTML={{
                      __html: truncateWords(blog.metaDescription, 8),
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  const truncateWords = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
  };

  return (
    <div className="flex justify-center items-center  mt-12 mb-24 px-5">
      <div className="flex flex-col items-center h-full w-[90%] ">
        <h1 className="text-[36px] font-poppins mb-5">Featured Products</h1>

        {ad && (
          <img
            className="w-full"
            alt="Ad"
            // style={{ objectFit: "fill", height: "500px", width: "1100px" }}
            src={ad.image || defaultImage}
          />
        )}

        <div
          className="carouselButton h-4/5 w-full text-black"
          ref={carouselRef}
        >
          {renderBlogs()}
        </div>

        {/* <div className="flex flex-row w-full 2xl:w-auto  justify-center flex-wrap 2xl:items-center "> */}
        {/* <div className="w-auto lg:w-full "> */}
        {/* <div className="flex md:relative md:top-48 lg:relative lg:top-48 2xl:relative 2xl:top-48    justify-end md:justify-between  w-full 2xl:w-auto ">
              <button
                className="prev m-3 flex justify-center items-center p-4 md:m-0 bg-[#ff0000] text-white border-none w-6 rounded-full h-6 "
                onClick={handlePrevClick}
              >
                <span className="text-9xl md:text-mini rotate-180 pb-1">➜</span>
              </button>
              <button
                className="next m-3 flex justify-center items-center p-4 md:m-0 bg-[#ff0000] text-white border-none w-6 rounded-full h-6 "
                onClick={handleNextClick}
              >
                <span className="text-9xl md:text-mini  pb-1">➜</span>
              </button>
            </div> */}
        {/* <div
              className=" flex justify-center items-center md:flex-nowrap flex-wrap  md:h-[350px] transition-transform duration-300 ease-in-out "
              ref={carouselRef}
            >
              {renderBlogs()}
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className={styles.featuredContentChild}>
          {/* ... (navigation buttons, same as before) */}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
