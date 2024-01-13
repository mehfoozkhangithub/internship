import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FrameComponent3 = () => {
  const [blogs, setBlogs] = useState([]);
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
        const response = await axios.get(`${apiUrl}/api/post/news`);
        setBlogs(response.data.posts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const handleBlogClick = (blogId) => {
    router.push(`/category/news?id=${blogId}`);
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
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false
           
          }
        }
      ]
    };

   

    return <div className="">
    <Slider {...settings}>
      {visibleBlogs.map((blog, index) => (
        <div key={index} onClick={()=>handleBlogClick(blog.id)} className=" h-[400px] 2xl:h-[464px]  mx-2 text-center  w-[30%] py-3 pr-3 text-black cursor-pointer ">
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
    <div className="flex flex-col justify-center items-center h-full w-[90%]  mx-22 ">
    <h1 className="text-[36px] font-poppins mb-5">News</h1>
      <div className="carouselButton h-4/5 w-full text-black" ref={carouselRef}>
        {renderBlogs()}
      </div>

      {/* <div className={styles.featuredContentChild}>
        ... (navigation buttons, same as before)
      </div> */}
    </div>
  </div>
  );
};

export default FrameComponent3;
