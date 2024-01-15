import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RingLoader } from "react-spinners";
import HomeAds from "../HomeAds";

const News = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1); //# this is the current page useState
  const blogsPerPage = 16; //! this is the number of blogs per page
  const [trendingPosts, setTrendingPosts] = useState([]); //@ Array of trending pages
  const [isLoading, setIsLoading] = useState(true); //$ Loading useState
  const [totalPages, setTotalPages] = useState(1); // total number of pages used in
  const router = useRouter(); //# this is the router
  const [hoveredBlogId, setHoveredBlogId] = useState(null); // Track the hovered blog ID
  const apiUrl = process.env.api;
  // const FileArray = [];

  // # Change page [Pagination]
  const paginate = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/post/news?page=${currentPage}&perPage=${blogsPerPage}`
        );
        const { data } = response;

        if (Array.isArray(data.posts)) {
          setTrendingPosts(data.posts);
          setTotalPages(Math.ceil(data.totalPosts / blogsPerPage));
        } else {
          console.log("Invalid data format for Trending Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchTrendingPosts().then(() => {
      setIsLoading(false);
    });
  }, [currentPage]);
  if (isLoading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ padding: "100px" }}
      >
        <RingLoader color="#d63636" />
      </div>
    );
  }

  if (!Array.isArray(trendingPosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (trendingPosts.length === 0) {
    return <div>No posts available</div>;
  }

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = trendingPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  // const totalPages = Math.ceil(trendingPosts.length / blogsPerPage);
  const maxPagesToShow = 10;
  const pageNumbers = [];
  let startPage = 1;

  if (totalPages > maxPagesToShow) {
    const middlePage = Math.ceil(maxPagesToShow / 2);

    if (currentPage <= middlePage) {
      startPage = 1;
    } else if (currentPage > totalPages - middlePage) {
      startPage = totalPages - maxPagesToShow + 1;
    } else {
      startPage = currentPage - middlePage + 1;
    }
  }

  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  const formatDate = (dateString) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("en-US", options);

    // Add the "th", "st", "nd", or "rd" suffix to the day
    const day = date.getDate();
    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }

    return formattedDate.replace(/(\d+)/, `$1${daySuffix}`);
  };

  const handleBlogHover = (blogId) => {
    setHoveredBlogId(blogId);
  };

  const handleBlogHoverLeave = () => {
    setHoveredBlogId(null);
  };

  // // ! this is  the page size limit live page  size.

  // // var w = window.innerWidth || document.documentElement.clientWidth;
  // // var h = window.innerHeight || document.documentElement.clientHeight;
  // let w = screen.availWidth;
  // let h = screen.availHeight;
  // console.log( w, "this is width");
  // console.log(h, "this is height");

  // $ here we have start the component.
  return (
    //# this is parent div
<<<<<<< HEAD
    <div className="this_div1 grid grid-cols-4 gap-3  my-2 mx-12 font-poppins  ">
      {/* this sec div where all the post come */}
      <div className="this_div2 col-span-3 grid grid-cols-3 gap-3 mx-10  ">
        {trendingPosts.map((trending) => (
          <div
            key={trending._id}
            className={`this_div3 bg-white shadow-lg rounded-lg  max-w-full h-auto  ${
=======
    <div className="this_div1 grid my-4 lg:grid-cols-4 lg:gap-3 xl:mx-12 lg:my-2 lg:mx-5 font-poppins grid-rows-1 ">
      {/* this sec div where all the post come */}
      <div className="this_div2  lg:col-span-3 grid lg:grid-cols-3   gap-3 2xl:mx-10 lg:mx-7 ">
        {trendingPosts.map((trending) => (
          <div
            key={trending._id}
            className={`this_div3_container mx-2 lg:m-0 bg-white shadow-lg rounded-lg   w-[87%] lg:max-w-full h-[17rem] lg:h-auto  ${
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
              hoveredBlogId === trending._id ? "shadow-xl" : ""
            }`}
            onMouseEnter={() => handleBlogHover(trending._id)}
            onMouseLeave={handleBlogHoverLeave}
          >
<<<<<<< HEAD
                    <div className="w-full h-[40%] bg-black ">   
                      <img
                      src={
                          trending.image ||
                          "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png"
                        } // Use a placeholder image path
                        alt={trending.title}
                        className="this_img h-40 w-full object-fill"
                      />
                      </div>

            <div className="this_card w-full h-[60%] flex flex-col gap-2">
              <div className="info_div pt-2 px-2 bg-white  h-[70%]">
                <h2 className="text-mini font-semibold w-fit mt-2">

                  {screen.availWidth === 1024
                    ? trending.title && (
                        <div
                          className=""
                          dangerouslySetInnerHTML={{
                            __html: `${trending.title
                              .split(" ")
                              .slice(0, 6)
                              .join(" ")}${
                              trending.title.split(" ").length > 6 ? " ..." : ""
                            }`,
                          }}
                        />
                      )
                    : trending.title && (
                        <div
                          className=""
                          dangerouslySetInnerHTML={{
                            __html: `${trending.title
                              .split(" ")
                              .slice(0, 3)
                              .join(" ")}${
                              trending.title.split(" ").length > 6 ? " ..." : ""
                            }`,
                          }}
                        />
                      )}

                </h2>
                <h2 className="text-mini text-gray-500  w-fit mt-2 ">
                  {screen.availWidth === 1024
                    ? trending.brief && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${trending.brief
                              .split(" ")
                              .slice(0, 6)
                              .join(" ")}${
                              trending.brief.split(" ").length > 6 ? " ..." : ""
                            }`,
                          }}
                        />
                      )
                    : trending.brief && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${trending.brief
                              .split(" ")
                              .slice(0, 2)
                              .join(" ")}${
                              trending.brief.split(" ").length > 6 ? " ..." : ""
                            }`,
                          }}
                        />
                      )}
                </h2>
                <p className="text-gray-200 mb-2 text-3xs ">
                {trending.selectedIndustry}
              </p>
                <p className="text-gray-500  text-3xs mt-3">
=======
            <div className="div_img lg:w-full  h-[40%]  ">
              <img
                src={
                  trending.image ||
                  "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png"
                } // Use a placeholder image path
                alt={trending.title}
                className="this_img h-[7rem] lg:h-40 w-full  object-contain md:object-fill"
              />
            </div>

            <div className="this_card w-full h-[60%]  flex flex-col gap-2">
              <div className="info_div p-1 md:pt-2 md:px-2 bg-white h-[70%]">
                <h2 className="text-[13px] md:text-[17px] xl:text-xl  2xl:text-6xl font-semibold w-fit mt-2">
                  {trending.title && (
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: `${trending.title
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}${
                          trending.title.split(" ").length > 6 ? " ..." : ""
                        }`,
                      }}
                    />
                  )}
                </h2>
                <h4 className="text-[9px] md:text-mini  2xl:text-xl  text-gray-500  w-fit mt-2 ">
                  {trending.brief && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${trending.brief
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}${
                          trending.brief.split(" ").length > 6 ? " ..." : ""
                        }`,
                      }}
                    />
                  )}
                </h4>
                <p className="text-gray-200 font-light mb-2 text-mini md:text-3xs ">
                  {trending.selectedIndustry}
                </p>
                <p className="text-gray-500 text-[7px]  md:text-mini  lg:text-3xs mt-3">
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
                  {formatDate(trending.createdAt)}
                </p>
              </div>

              <div className="btn_div py-2 px-2 ">
                <button
<<<<<<< HEAD
                  className="bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 px-1 w-full border-none  duration-500 rounded ease-in-out cursor-pointer  "
=======
                  className="bg-crimson hover:bg-transparent hover:border-solid hover:!text-crimson hover:border-[1px]  hover:border-crimson text-white  md:font-medium p-1 text-mini md:py-2 md:px-1  w-full border-none  duration-500 rounded ease-in-out cursor-pointer "
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
                  onClick={() => router.push(`/blog/${trending._id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 grid grid-cols-1 gap-1 ">
        <div className="col-span-1 grid grid-cols-1 gap-1">
          <HomeAds />
        </div>
      </div>
<<<<<<< HEAD
      <div className="col-span-5 flex justify-center mt-8">
        {totalPages > 1 && (
          <nav>
            <ul className="flex lg:space-x-6 md:space-x-2 list-none">
              <li>
                <button
                  className="bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 px-3 w-full border-none  duration-500 rounded ease-in-out "
=======
      <div className="col-span-5 flex justify-center mt-8 w-full ">
        {totalPages > 1 && (
          <nav>
            <ul className="flex gap-2 flex-wrap xl:space-x-6 lg:space-x-2 list-none">
              <li>
                <button
                  className="bg-crimson hover:bg-transparent hover:border-solid hover:!text-crimson hover:border-[1px]  hover:border-crimson text-white font-medium py-2 px-3 w-full border-none  duration-500 rounded ease-in-out cursor-pointer"
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                  <button
<<<<<<< HEAD
                    className={`bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 px-3 w-full border-none  duration-500 rounded ease-in-out ${
=======
                    className={`bg-crimson hover:bg-transparent hover:border-solid hover:!text-crimson hover:border-[1px]  hover:border-crimson text-white font-medium py-2 px-3 w-full border-none  duration-500 rounded ease-in-out cursor-pointer ${
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
                      currentPage === pageNumber ? "bg-red-700" : ""
                    }`}
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li>
                <button
<<<<<<< HEAD
                  className={`bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 w-full border-none  duration-500 rounded ease-in-out  px-4`}
=======
                  className={`bg-crimson hover:bg-transparent hover:border-solid hover:!text-crimson hover:border-[1px]  hover:border-crimson text-white font-medium py-2 w-full border-none  duration-500 rounded ease-in-out  px-4 cursor-pointer`}
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default News;
