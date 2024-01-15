import { useRouter } from "next/router";
import styles from "./frame-component6.module.css";
const FrameComponent6 = () => {
  const router = useRouter();
  return (
    <div className="w-full  h-full text-center md:h-[447px]  2xl:h-[509px] text-11xl text-white font-poppins my-3     ">
      <div className="w-full h-full md:w-[98%] md:relative  md:flex place-items-end   ">
        {/* outer div */}
        <div className="md:absolute mb-3 md:mb-0 md:ml-2  grid  grid-cols-2 md:grid-cols-6 xl:grid-cols-8  grid-rows-8 md:grid-rows-3 lg:grid-rows-2 xl:grid-rows-2 gap-2 md:gap-4 xl:gap-6  w-full h-1/2 md:h-full  md:bg-transparent md:grid    md:z-1">
          <div className=" md:col-span-2 md:row-span-3 md:col-start-5 xl:col-start-7 ">
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-March-2023.pdf">
            <img
              className="w-full h-full"
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Mar-2023.jpg"
            />
          </a>
          </div>
         <div className="md:row-start-1 xl:col-start-2">
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Feb-2023.pdf">
            <img
              className="h-full w-full"
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Feb-2023.jpg"
            />
          </a>
          </div>
            <div className="md:row-start-1 xl:row-start-1 xl:col-start-3">
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-December-2022.pdf">
            <img
              className="h-full w-full"
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/jan-2023.jpg"
            />
          </a>
          </div>
          <div className="md:row-start-1 xl:row-start-1  xl:col-start-4  ">
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-June-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/December-2022.jpg"
              />
            </a>
          </div>
         <div className="md:row-start-1 xl:row-start-1  xl:col-start-5">
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-May-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/November-2022.jpg"
              />
            </a>{" "}
          </div>
          <div className="lg:hidden xl:block md:row-start-2 xl:row-start-1  xl:col-start-6">
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-April-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/October-2022.jpg"
              />
            </a>{" "}
          </div>
        </div>

        {/* inner div red lane div */}

        <div className="w-full bg-firebrick mb-7    xl:mb-32 flex md:justify-start flex-col md:flex-row ">
          

          <div className=" md:pt-0 mx-auto md:mx-3 xl:w-[20%] lg:w-[20%]  xl:ml-60 lg:ml-12 md:mr-20 lg:mr-2   flex justify-center items-center  z-50 ">
            <span
              className=" bg-gainsboro  px-4 lg:px-2  xl:px-4 my-3 rounded-md text-black font-medium md:font-semibold  md:text-[23px] xl:text-9xl cursor-pointer"
              onClick={() => router.push(`/subscription/subscription`)}
            >
              Subscribe Now
            </span>
          </div>

          <div className=" text-center z-50">
            <div className="text-9xl xl:text-21xl lg:text-11xl font-semibold">
              Magazine Ad
            </div>

            <div className=" text-xl  xl:text-6xl lg:text-xl  pb-2">
              Magazine Details{" "}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
