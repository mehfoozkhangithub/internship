import VideoBlogWrapper from "../components/video-blog-wrapper";
import VideoBlogContainer from "../components/video-blog-container";
import styles from "./frame-component2.module.css";
const FrameComponent2 = () => {
  return (
<<<<<<< HEAD
    <div className="md:h-[530px] h-screen 2xl:h-[700px]">
      <div className="h-[20%]  flex justify-center items-center">
        <h1 className="text-[36px] font-poppins mb-5">Trending</h1>
      </div>
      <div className="h-[80%] w-full ">
        <div className="h-[95%] xl:h-full  w-full     md:flex-row   flex-col justify-center items-center  flex  gap-4  lg:gap-0  ">
          <div className=" h-1/2 md:h-full  w-full md:w-2/3">
            <iframe
              src="https://www.youtube.com/embed/Ofsp905HFJo?si=bAZzOqrVNt5_nsXD?rel=0"
              title=""
              className="w-full h-full object-cover md:px-2   xl:pl-10"
              frameBorder="0" // Remove border
              allowFullScreen // Enable full-screen mode
            />
          </div>

          <div className="w-full flex justify-center md:w-1/3 h-1/2 md:h-full md:px-2 ">
            <VideoBlogContainer playlistId="PLEd26MS72w4KI8xex7qn0KJ6pSDB8em6O" />
          </div>
=======
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
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
