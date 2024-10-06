
import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import Nav from '../../Components/Navbar/Nav'; 
import SlideNav from '../../Components/Navbar/SlideNav'; 
import MainVideo from '../../MainVideo'; 
import SideVideo from '../../SideVideo'; 
import axios from "axios"; 

function Video() { 
  const { videoId: initialVideoId } = useParams(); 
  const [showText, setShowText] = useState(true); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [videoData, setVideoData] = useState(null); 
  const [videoId, setVideoId] = useState(initialVideoId); 

  const handleMenuClick = () => { 
    setShowText((prev) => !prev); 
    setIsMenuOpen((prev) => !prev); 
  };

  const handleVideoSelect = (id) => {
    setVideoId(id); 
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      const apiKey = "AIzaSyCf1k9NTslVM9x5VSHUQD6JOX61tBsQYIc"; 
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`; 
      try { 
        const response = await axios.get(url); 
        setVideoData(response.data.items[0]); 
      } catch (error) { 
        console.error("Error fetching video data:", error); 
      } 
    };

    fetchVideoData();
  }, [videoId]); 

  return ( 
    <> 
      <Nav onMenuClick={handleMenuClick} /> 
      <div className={`flex lg:flex-row`}>
        <SlideNav showText={showText} /> 
        <div className={`flex ${isMenuOpen ? 'pl-3' : 'pl-14'} flex-col lg:flex-row`}>
          <div className="flex-1">
            {videoData ? ( 
              <MainVideo videoData={videoData} /> 
            ) : ( 
              <p>Loading video...</p> 
            )} 
          </div> 
          <SideVideo onVideoSelect={handleVideoSelect} /> 
        </div> 
      </div> 
    </> 
  ); 
}

export default Video;
