# Industrial Project

Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

To preview and run the project on your device:

1. Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
2. In the terminal, run `npm install`
3. Run `npm run dev` to view project in browser

```js
{
  /* new card start */
}
{
  /* <div class="p-2 md:p-3 ">
              <h2 class="text-mini font-semibold  text-gray-800 ">
                {trending.title && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${trending.title
                        .split(" ")
                        .slice(0, 6)
                        .join(" ")}${
                        trending.title.split(" ").length > 6 ? " ..." : ""
                      }`,
                    }}
                  />
                )}
              </h2>
              <h2 className="text-mini">
                <div className="text-gray-500 mb-2">
                  {trending.brief && (
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
                  )}
                </div>
              </h2>

              <p class="mt-1 text-gray-500 dark:text-gray-400">
                {trending.selectedIndustry}
              </p>
              <p class="mt-1 text-gray-500 dark:text-gray-400">
                {formatDate(trending.createdAt)}
              </p>
              <button
                class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 no-underline"
                onClick={() => router.push(`/blog/${trending._id}`)}
              >
                Read More
              </button>
            </div> */
}

{
  /* new card end */
}
```

## this is the new code of the news page

```js -->new code
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

  // ! this is  the page size limit live page  size.

  // var w = window.innerWidth || document.documentElement.clientWidth;
  // var h = window.innerHeight || document.documentElement.clientHeight;
  let w = screen.availWidth;
  let h = screen.availHeight;
  console.log(typeof w, "this is width");
  console.log(h, "this is height");

  // $ here we have start the component.
  return (
    //# this is parent div
    <div className="this_div1 grid grid-cols-4 gap-4 2xl:mx-40 lg:mx-16  my-2 font-poppins">
      {/* this sec div where all the post come */}
      <div className="this_div2 col-span-3 grid grid-cols-3 gap-3 lg:mx-2  xl:mx-20">
        {trendingPosts.map((trending) => (
          <div
            key={trending._id}
            className={`this_div3 bg-white shadow-lg rounded-lg overflow-hidden max-w-full ${
              hoveredBlogId === trending._id ? "shadow-xl" : ""
            }`}
            onMouseEnter={() => handleBlogHover(trending._id)}
            onMouseLeave={handleBlogHoverLeave}
          >
            <img
              src={
                trending.image ||
                "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png"
              } // Use a placeholder image path
              alt={trending.title}
              className="this_img h-40 w-full object-fill"
            />

            <div className="this_card md:py-2 md:px-3  2xl:p-4 h-auto xl:px-5">
              <h2 className="text-mini font-semibold w-fit max-lg:mb-1">
                {/* HERE WE HAVE TO USE LOGIC FOR ADJUSTING SIZE  */}

                {/* this is for 1024px code  */}

                {screen.availWidth == 1024
                  ? trending.title && (
                      <div
                        className="mb-2"
                        dangerouslySetInnerHTML={{
                          __html: `${trending.title
                            .split(" ")
                            .slice(0, 4)
                            .join(" ")}${
                            trending.title.split(" ").length > 5 ? " ..." : ""
                          }`,
                        }}
                      />
                    )
                  : trending.title && (
                      <div
                        className="mb-2"
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

                {/* this is normal code ust we have to change the prop of the slice sec value as 6 for normal  */}
              </h2>
              <h2 className="text-mini text-gray-500  w-fit lg:mb-2 ">
                {screen.availWidth === 1024
                  ? trending.brief && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${trending.brief
                            .split(" ")
                            .slice(0, 4)
                            .join(" ")}${
                            trending.brief.split(" ").length > 5 ? " ..." : ""
                          }`,
                        }}
                      />
                    )
                  : trending.brief && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${trending.brief
                            .split(" ")
                            .slice(0, 3)
                            .join(" ")}${
                            trending.brief.split(" ").length > 6 ? " ..." : ""
                          }`,
                        }}
                      />
                    )}
              </h2>
              {/* <p className="text-gray-200 mb-2 text-3xs ">
                {trending.selectedIndustry}
              </p> */}
              <p className="text-gray-500 mb-4 text-3xs">
                {formatDate(trending.createdAt)}
              </p>

              <button
                className="bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 px-1 w-full border-none  duration-500 rounded ease-in-out xl:mt-2 "
                onClick={() => router.push(`/blog/${trending._id}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-1 grid grid-cols-1 gap-1 ">
        <div className="col-span-1 grid grid-cols-1 gap-1">
          <HomeAds />
        </div>
      </div>
      <div className="col-span-5 flex justify-center mt-8">
        {totalPages > 1 && (
          <nav>
            <ul className="flex lg:space-x-6 md:space-x-2 list-none">
              <li>
                <button
                  className="bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 px-3 w-full border-none  duration-500 rounded ease-in-out "
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 px-3 w-full border-none  duration-500 rounded ease-in-out ${
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
                  className={`bg-red-500 hover:bg-transparent hover:border-solid hover:!text-red-500 hover:border-[1px]  hover:border-red-500 text-white font-medium py-2 w-full border-none  duration-500 rounded ease-in-out  px-4`}
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
```
