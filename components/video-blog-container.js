import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./video-blog-container.module.css";

const VideoBlogContainer = ({ playlistId, propTop, propLeft }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Define your YouTube Data API key
    const apiKey = "AIzaSyBQgI6YCkvOvAUGC3D65wZQmjVEMORcO74";

    // Make a request to fetch playlist items
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=10`
      )
      .then((response) => {
        const videoData = response.data.items.map((item) => {
          return {
            videoId: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnailUrl: item.snippet.thumbnails.default.url,
          };
        });
        setVideos(videoData);
      })
      .catch((error) => {
        console.error("Error fetching YouTube playlist:", error);
      });
  }, [playlistId]);

  return (
<<<<<<< HEAD
    <div className="w-full max-md:w-[436px] min-[2560px]:w-[614px]   h-full text-center text-mini text-black font-poppins overflow-y-scroll  " style={{ top: propTop, left: propLeft }}>
      {videos.map((video) => (
        <div key={video.videoId}   >
          <iframe
          className="min-[2560px]:w-[557px] min-[2560px]:h-[260px] md:w-[252px] xl:w-[307px] "
=======
    <div className={styles.rectangleParent} style={{ top: propTop, left: propLeft, width: "320px", height: "384px", overflowY: "scroll" }}>
      {videos.map((video) => (
        <div key={video.videoId} className={styles.videoContainer} >
          <iframe
>>>>>>> 3083bc45b76bf50104c6ffe0b4015ad95c7a4960
            width="300"
            height="121"
            src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoBlogContainer;
