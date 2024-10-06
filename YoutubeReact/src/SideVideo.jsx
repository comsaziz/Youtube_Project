// src/Components/SideVideo.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function SideVideo({ onVideoSelect }) {
  const [sideVideos, setSideVideos] = useState([]);

  useEffect(() => {
    const fetchRandomVideos = async () => {
      const apiKey = "AIzaSyCf1k9NTslVM9x5VSHUQD6JOX61tBsQYIc"; 
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${apiKey}`; 

      try {
        const response = await axios.get(url);
        setSideVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching side videos:", error);
      }
    };

    fetchRandomVideos();
  }, []);

  return (
    <div className="flex flex-col mt-5 bg-white shadow-none rounded-lg p-4 max-w-xs">
      <h3 className="text-lg font-semibold mb-2">Recommended Videos</h3>
      {sideVideos.map((video) => (
        <div
          key={video.id}
          className="flex items-center cursor-pointer mb-2"
          onClick={() => onVideoSelect(video.id)}
        >
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
            className="h-auto w-auto object-cover rounded-lg" 
          />
          <div className="ml-2">
            <h4 className="text-sm font-semibold">{video.snippet.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SideVideo;
