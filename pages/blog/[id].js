import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faBuilding,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import Header from "../Header";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  console.log(post)
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.api;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/post/posts/${id}`);
        setPost(response.data.post);
        console.log(post);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Blog not found</div>;
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
  return (
    <>
      <Header />
      <div className=" bg-white py-8  w-full h-full ">
        <div className="container w-full  sm:w-[70%]  lg:w-[90%]  xl:w-[70%] mx-auto ">
          <div className="h-full w-[95%] flex flex-col justify-end  ml-1">
            <div className="border-b-2 border-red-500">
              <h2 className="text-3xl text-left font-bold text-black font-poppins mb-4 ml-2 sm:ml-6">
                {post.title}
              </h2>
            </div>
            {/* <img
            src={
              post.image ||
              "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png"
            }
            alt={post.title}
            className="rounded-3xl mb-2 "
            style={{ maxHeight: "300px", minHeight: "100px", width: "400px" }}
          /> */}
            <div className="text-black font-poppins mb-6 sm:ml-6">
              <p
                className="text-[16px] sm:text-sm leading-relaxed "
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
            </div>
            <div className=" flex flex-col w-full ">
              <div className="w-full  flex mb-2">
                <div className="w-full sm:w-1/2 lg:w-1/6 flex ml-2">
                  <p className="text-black font-poppins mb-1">
                    <FontAwesomeIcon icon={faList} />
                  </p>
                  <p className="text-black font-poppins ml-2">
                    {post.category}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/6  flex">
                  <p className="text-black font-poppins mb-1">
                    <FontAwesomeIcon icon={faBuilding} />
                  </p>
                  <p className="text-black font-poppins ml-2">
                    {post.selectedIndustry}
                  </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/8  flex">
                  <p className="text-black font-poppins mb-1">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </p>
                  <p className="text-black font-poppins ml-2">
                    {formatDate(post.createdAt)}
                  </p>
                </div>
              </div>
              <div className="w-full py-2 ">
              <div className="flex w-full gap-2 overflow-hidden overflow-x-visible">
                  {post.keyword
                    .toString()
                    .split(" ")
                    .map((key) => (
                      <button
                        key={key}
                        className=" bg-red-500 cursor-pointer hover:bg-transparent hover:border-solid  hover:!text-red-500  hover:border-red-500 text-white font-medium py-2 px-3 w-full   duration-500 rounded ease-in-out"
                      >
                        {key}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
