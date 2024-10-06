import React, { useState } from 'react';
import Nav from '../../Components/Navbar/Nav';
import SlideNav from '../../Components/Navbar/SlideNav'
import HomeVideo from '../../Components/HomeVideo/HomeVideo';


function Home() {
  const [showText, setShowText] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setShowText((prev) => !prev);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Nav onMenuClick={handleMenuClick} />
      <div className="flex">
        <SlideNav showText={showText} />
        <div className={`flex ${isMenuOpen ? 'pl-3' : 'pl-14'}`}>
          <HomeVideo />
        </div>
      </div>
    </>
  );
}

export default Home;
