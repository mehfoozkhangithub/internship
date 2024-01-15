
  # Industrial Project

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm run dev` to view project in browser
  





## frame-component2 old code  
```js
   <div className={styles.trendingBlogsParent}>
      <div className={styles.component}>
        <div className={styles.trendingBlogs}>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <iframe
                src="https://www.youtube.com/embed/Ofsp905HFJo?si=bAZzOqrVNt5_nsXD?rel=0"
                title=""
                className={styles.groupChild}
                frameBorder="0" // Remove border
                allowFullScreen // Enable full-screen mode
              />
              {/* <div className={styles.rectangleGroup}>
                <div className={styles.groupItem} />
                <div className={styles.rectangleContainer}>
                  <div className={styles.groupInner} />
                  <div className={styles.rectangleDiv} />
                </div>
              </div> */}
              {/* <VideoBlogWrapper
                propTop="293px"
                propLeft="0px"
                propLeft1="19px"
              /> */}
            </div>
            {/* <div className={styles.groupDiv}>
              <div className={styles.groupChild1} />
            </div> */}
          </div>
          	<VideoBlogContainer playlistId="PLEd26MS72w4KI8xex7qn0KJ6pSDB8em6O" />
          {/* <VideoBlogContainer
            productIds="/rectangle-191@2x.png"
            propTop="205px"
            propLeft="804px"
          />
          <VideoBlogContainer
            productIds="/rectangle-192@2x.png"
            propTop="320px"
            propLeft="804px"
          /> */}
          <div className={styles.trending}>Trending</div>
        </div>
      </div>
    </div>
  







  //component 6
  ```

<div className={styles.rectangleGroup}>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Sep-2023.pdf">
            <img
              className={styles.groupItem}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Sep-23.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Aug-2023.pdf">
            <img
              className={styles.groupInner}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Aug-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-July-2023.pdf">
            <img
              className={styles.rectangleIcon}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/July-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-June-2023.pdf">
            <img
              className={styles.groupChild1}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/June-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-May-2023.pdf">
            <img
              className={styles.groupChild2}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/May-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-April-2023.pdf">
            <img
              className={styles.groupChild3}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Apr-2023.jpg"
            />
          </a>
        </div>


  ```js





  
  
  
  
  
//component 7

```

import styles from "./frame-component7.module.css";
const FrameComponent7 = () => {
  return (
    <div className={styles.ctaParent}>
      <div className={styles.cta}>
        <div className={styles.ctaChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.subscribeNow} onClick={() => router.push(`/subscription/subscription`)} style={{cursor:"pointer"}}>Subscribe Now</b>
        </div>
        <div className={styles.magazineAd}>Magazine Ad</div>
        <div className={styles.magazineDetails}>Magazine Details</div>
        <div className={styles.rectangleGroup}>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-March-2023.pdf">
            <img
              className={styles.groupItem}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Mar-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Feb-2023.pdf">
            <img
              className={styles.groupInner}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Feb-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Jan-2023.pdf">
            <img
              className={styles.rectangleIcon}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/jan-2023.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-December-2022.pdf">
            <img
              className={styles.groupChild1}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/December-2022.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-November-2022.pdf">
            <img
              className={styles.groupChild2}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/November-2022.jpg"
            />
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-October-2022.pdf">
            <img
              className={styles.groupChild3}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/October-2022.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;







js```






<!-- header -->
```


import { useRouter } from "next/router";
import styles from "./frame-component1.module.css";
import { useState } from "react";
import sidebarStyles from "../components/sidebar.module.css";
import HeaderAds from "../components/HeaderAds";
const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "Events", path: "/events/events" },
    { label: "Directories", path: "/directory/directories" },
    { label: "About Us", path: "/about" },
    // Add more pages as needed
  ];

  const currentDate = new Date();

  // Format the date as "Tuesday, 11.05.2023"
  const formattedDate = currentDate.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <div className="h-auto justify-center font-poppins">
      <div className="bg-white w-full h-36 md:h-[150px] flex justify-between items-center">
        <img
          className="w-40 h-20 object-cover"
          alt=""
          src="/logo-full-11@2x.png"
          onClick={() => router.push(`/`)}
        />
        <div className="w-[60%]">
          <form className="flex">
            <input type="text" placeholder="Search.." name="search" className="outline-none ml-[20px] w-[40%] p-[10px] mt-2 text-[17px] " />
            <button type="submit"><i className="w-[100px] h-[40px] py-[6px] px-[10px] mt-[8px] mr-16px bg-[#e62424] text-[17px] border-none cursor-pointer text-white ml-[10px] ">Search</i></button>
          </form>
        </div>
      </div>


      <div className="w-full">
      <div className="flex-row justify-between w-full">
          
          <div className="md:pl-4 pl-2 bg-firebrick h-[45px] cursor-pointer text-white flex justify-between items-center ">
          <div className="w-[58px]" onClick={toggleSidebar}>
            <div className={styles.hamburgerIcon}>
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
              <div className={styles.hamburgerLine} />
            </div>
          </div>
          <div className="flex justify-between items-center w-4/5 overflow-x-auto">
            <div
              className="lg:pl-10 pl-5"
              onClick={() => router.push(`/category/products`)}
            >
              Products
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/interview`)}
            >
              Interviews
            </div>
            {/* <div className={styles.navbar}>Magazines</div> */}
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/news`)}
            >
              News
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/casestudy`)}
            >
            Case Study 
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/category/article`)}
            >
              Aricles
            </div>
            <div
              className="lg:pl-16 pl-10"
              onClick={() => router.push(`/events/events`)}
            >
              Events
            </div>
            <div
              className="lg:px-16 px-10"
              onClick={() => router.push(`/directory/directories`)}
            >
              Directories
            </div>
            <div style={{ width: "200px" }}>
            {" "}
            
          </div>
          </div>
          {/* <button
              className="h-[45px] font-semibold text-[20px] border-white text-white bg-red-600 rounded-b-[20px]"
              onClick={() => router.push(`/subscription/subscription`)}
              style={{ cursor: "pointer" }}
            >
              Subscribe Now
            </button> */}
          </div>

          

        </div>
      </div>
      <HeaderAds />


      <div
        className={`${sidebarStyles.sidebar} ${isSidebarOpen ? sidebarStyles.open : ""
          }`}
      >
        <div className={sidebarStyles.navbarhead}>
          <img
            className={styles.logoFull1}
            alt=""
            src="/logo-full-11@2x.png"
            onClick={() => router.push(`/`)}
          />
        </div>
        <div className={sidebarStyles.navbar}>
          <div className={sidebarStyles.navbarItem}>
            <a href="/" className={sidebarStyles.navLink}>
              Home
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/about" className={sidebarStyles.navLink}>
              About Us
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/contactus" className={sidebarStyles.navLink}>
              Contact Us
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/privacypolicy" className={sidebarStyles.navLink}>
              Privacy Policy
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/termsandconditions" className={sidebarStyles.navLink}>
              Terms & Conditions
            </a>
          </div>
          <div className={sidebarStyles.navbarItem}>
            <a href="/mediapartner" className={sidebarStyles.navLink}>
              Media Partner
            </a>
          </div>
        </div>
      </div>
      {/* Menu Items */}
      {isMenuOpen && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onClick={() => handleMenuItemClick(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Header;





js```







subscription.js
```
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import EventGridPagination from "../../components/EventGridPagination";
import Banner from "../../components/Banner";

const subscription = () => {
  // Define some sample data
  const data = {
    title: "Print",
    price: "Price - 6000/-",
    duration: "12 Months",
    type: "Print + Digital Magazines",
    description: "Newsletters",
  };

  return (
    <div>
      <Header />
      <Banner />
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {/* Container for the image */}
        <div className="image-container">
          <img
            src="https://www.industrialautomationindia.in/images/banner/subscribe-2023-min.jpeg"
            alt="Image"
          />
        </div>

        {/* Container for the data */}
        <div
          style={{
            border: "solid 1px",
            height: "330px",
            width: "350px",
            borderRadius: "20px",
            textAlign: "center",
            backgroundColor: "red",
          }}
        >
          <div
            style={{
              borderBottom: "solid 1px",
              alignItems: "center",
              backgroundColor: "red",
            }}
          >
            <h1 style={{ color: "white" }}>{data.title}</h1>
          </div>
          <div style={{ backgroundColor: "white", padding: "5px" }}>
            <h3>{data.price}</h3>
            <h3>{data.duration}</h3>
            <h3>{data.type}</h3>
            <h3>{data.description}</h3>
          </div>

          <div
            style={{
              borderTop: "solid 1px",
              alignItems: "center",
              backgroundColor: "red",
            }}
          >
            <a href="https://pages.razorpay.com/iamgzn-print" style={{ textDecoration: "none" }}>
              <h2 style={{ color: "white" }}>Buy Now</h2>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default subscription;




js```




<!-- #directorygridpagination -->
```js
 <div className="grid grid-cols-4 gap-4 mx-20 my-2 font-poppins">
      <div className="col-span-4 flex justify-center mt-4 mx-24">
        <ul className="flex space-x-2">
          {Array.from({ length: 26 }).map((_, index) => (
            <button
              className={`bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-2 rounded ${selectedMonth === index + 1 ? "bg-red-900" : ""
                }`}
              onClick={() => setSelectedMonth(index + 1)}
            >
              {monthNames[index]}
            </button>
          ))}
        </ul>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-4 ">
        <div className="col-span-1 grid grid-cols-1 gap-1 ">
          <div className="col-span-1 grid grid-cols-1 gap-1">
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-full border border-solid border-gray-300"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <div className="p-6">
                <ul className="list-none p-0 text-gray-500 mb-2">
                  {Array.from(
                    new Set(trendingPosts.map((blog) => blog.selectedIndustry))
                  )
                    .filter((industry) => industry && isNaN(Number(industry)))
                    .map((industry, index) => (
                      <div key={industry._id}>
                        <a
                          href={`#industry-${index}`}
                          className="text-blue-500 hover:underline"
                          onClick={() => filterByIndustry(industry)}
                        >
                          {industry}
                        </a>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2  ">
          {trendingPosts.map((trending) => (
            <div
              key={trending._id}
              className={`bg-white shadow-lg rounded-lg overflow-hidden max-w-full ${hoveredBlogId === trending._id ? "shadow-xl" : ""
                }`}
              onMouseEnter={() => handleBlogHover(trending._id)}
              onMouseLeave={handleBlogHoverLeave}
            >
              <img
                src={
                  trending.logo
                } // Use a placeholder image path
                alt={trending.title}
                className="h-40 w-full object-fit-contain"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{trending.title}</h2>
                <p className="text-gray-500 mb-2">{trending.designation}</p>
                <h4 className="text-gray-500 mb-2">
                  {trending.selectedIndustry}
                </h4>
                <p className="text-gray-500 mb-4">{trending.acti_date}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => router.push(`/directories/${trending._id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-1 ">
          <div className="col-span-1 grid grid-cols-1 gap-1">
            <DirectoryAds />
          </div>
        </div>
        <div className="col-span-4 flex justify-center mt-8">
          {totalPages > 1 && (
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <button
                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {pageNumbers.map((pageNumber, index) => (
                  <div key={index}>

                    <button
                      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ${currentPage === pageNumber ? "bg-red-700" : ""
                        }`}
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </div>
                ))}
                <li>
                  <button
                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded`}
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
    </div>




```