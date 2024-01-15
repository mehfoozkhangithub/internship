import { useRouter } from "next/router";
import styles from "./frame-component6.module.css";
const FrameComponent6 = () => {
  const router = useRouter();
  return (
<<<<<<< HEAD
    <div className="w-full  h-full text-center md:h-[447px]  2xl:h-[509px] text-11xl text-white font-poppins my-3  ">
      <div className="w-full h-full md:w-[95%] md:relative  md:flex place-items-end   ">
        {/* outer div */}
        <div className="md:absolute mb-3 md:mb-0 md:ml-2  grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8  grid-rows-8 md:grid-rows-3 lg:grid-rows-2 xl:grid-rows-2 gap-2 md:gap-4 xl:gap-6  w-full h-1/2 md:h-full  md:bg-transparent md:grid    md:z-1">
          <div className="md:col-span-2 md:row-span-3 xl:col-start-2 ">
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Sep-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Sep-23.jpg"
              />
            </a>
          </div>
          <div>
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Aug-2023.pdf">
              <img
                className="w-full h-full "
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Aug-2023.jpg"
              />
            </a>
          </div>
          <div>
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-July-2023.pdf">
              <img
                className="w-full h-full "
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/July-2023.jpg"
              />
            </a>
          </div>
          <div>
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-June-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/June-2023.jpg"
              />
            </a>
          </div>
          <div>
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-May-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/May-2023.jpg"
              />
            </a>{" "}
          </div>
          <div>
            <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-April-2023.pdf">
              <img
                className="w-full h-full"
                alt=""
                src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Apr-2023.jpg"
              />
            </a>{" "}
          </div>
        </div>

        {/* inner div red lane div */}

        <div className="w-full bg-firebrick mb-7 xl:mb-32 flex md:justify-end flex-col md:flex-row ">
          <div className=" text-center z-50">
            <div className="text-9xl xl:text-21xl lg:text-11xl font-semibold">
              Magazine Ad
            </div>

            <div className=" text-xl  xl:text-6xl lg:text-xl  pb-2">
              Magazine Details{" "}
            </div>
          </div>

          <div className=" md:pt-0 mx-auto md:mx-3 xl:w-[20%] lg:w-[20%]  xl:ml-60 lg:ml-12 md:mr-3 lg:mr-2   flex justify-center items-center  z-50 ">
            <span
              className=" bg-gainsboro  px-4 lg:px-2  xl:px-4 my-3 rounded-md text-black font-medium md:font-semibold  md:text-[23px] xl:text-9xl cursor-pointer"
              onClick={() => router.push(`/subscription/subscription`)}
            >
              Subscribe Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;

// <div className={styles.ctaParent}>
//       <div className={styles.cta}>
//         <div className={styles.ctaChild} />
//         <div className={styles.rectangleParent}>
//           <div className={styles.groupChild} />
//           <b
//             className={styles.subscribeNow}
//             onClick={() => router.push(`/subscription/subscription`)}
//             style={{ cursor: "pointer" }}
//           >
//             Subscribe Now
//           </b>
//         </div>
//         <div className={styles.magazineAd}>Magazine Ad</div>
//         <div className={styles.magazineDetails}>Magazine Details</div>

//       </div>
//     </div>

{
  /* <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Sep-2023.pdf">
=======
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
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-Sep-2023.pdf">
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
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
<<<<<<< HEAD
          </a> */
}
{
  /* <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-April-2023.pdf">
=======
          </a>
          <a href="https://magazine-automation.s3.ap-south-1.amazonaws.com/ia-April-2023.pdf">
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
            <img
              className={styles.groupChild3}
              alt=""
              src="https://wwwd601d2yq4c.cdn.e2enetworks.net/content/Apr-2023.jpg"
            />
<<<<<<< HEAD
          </a> */
}
=======
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
