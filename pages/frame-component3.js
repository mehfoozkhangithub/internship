import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  // # this is the function we use to store the state of application
  const [blogs, setBlogs] = useState([]);
  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const apiUrl = process.env.api; // this is api
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
  console.log(blogs, "this is blog");

  // # not understand

  const renderBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = blogs.slice(startIndex, endIndex);

    return visibleBlogs.map((blog, index) => (
      <div
        key={index}
        className={styles.rectangleParent}
        onClick={() => handleBlogClick(blog.id)}
      >
        <img
          className={styles.groupChild}
          alt=""
          src={blog.image || defaultImage}
        />
        <div className={styles.blogTitle}>{truncateWords(blog.title, 6)}</div>
        {/* <div className={styles.blogTitle}>{truncateWords(blog.description, 6)}</div> */}
      </div>
    ));
  };

  // # not understand

  const truncateWords = (text, maxWords) => {
    // console.log(maxWords, "this is maxWord");
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
  };

  return (
    <div className="flex justify-center items-center h-[400px] w-full ">
      <div className="flex h-[400px] flex-col items-center">
        <h1 className="text-[36px] font-poppins mb-5">News</h1>
        <div className="flex overflow-hidden relative w-full ">
          <div
            className="flex h-[350px] flex-col transition-transform duration-300 ease-out "
            ref={carouselRef}
          >
            <div className="flex justify-between absolute w-full top-[110px] z-10">
              {/* this is my code 👇  */}

              {/*   <button
                className={`${styles.carouselButton1} prev`}
                onClick={handlePrevClick}
              >
                &lt;
              </button> */}
              {/* this is nikile code 👇  */}

              <button
                className="prev m-3 flex justify-center items-center p-4 md:m-0 bg-[#ff0000] text-white border-none w-6 rounded-full h-6 "
                onClick={handlePrevClick}
              >
                <span className="text-9xl md:text-mini rotate-180 pb-1">➜</span>
              </button>

              <button
                className={`${styles.carouselButton2} next`}
                onClick={handleNextClick}
              >
                &gt;
              </button>
            </div>
            <div className="flex flex-row ">{renderBlogs()}</div>
          </div>
        </div>
        {/* <div className={styles.featuredContentChild}></div> */}
      </div>
    </div>
  );
};

export default FrameComponent3;
