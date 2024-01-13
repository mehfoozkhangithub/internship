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
    <div className="">
      <Header />
      <Banner />
      <div
        className=" w-full  container flex-col justify-center items-center lg:justify-evenly lg:flex-row  xl:mx-9"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {/* Container for the image */}
        <div className="image-container">
          <img
          className="     md:ml-20  w-[300px] md:w-[450px] "
            src="https://www.industrialautomationindia.in/images/banner/subscribe-2023-min.jpeg"
            alt="Image"
          />
        </div>

        {/* Container for the data */}
        <div
        className="my-10 md:ml-20 lg:ml-0 w-[278px] md:w-[350px]"
          style={{
            border: "solid 1px",
            height: "330px",
            // width: "350px",
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
