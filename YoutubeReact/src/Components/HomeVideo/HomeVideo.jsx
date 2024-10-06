import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeVideo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyCf1k9NTslVM9x5VSHUQD6JOX61tBsQYIc";
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&key=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 mt-7">
      {videos.map((video) => (
        <div key={video.id} className="card rounded-lg shadow-none">
          <Link to={`/video/${video.id}`}>
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <h2 className="text-base font-bold mt-2">{video.snippet.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomeVideo;
