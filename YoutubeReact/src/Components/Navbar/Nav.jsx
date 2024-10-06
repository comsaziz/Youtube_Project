import React from 'react';
import MenuIcon from '../../assets/Menu.png';
import LogoIcon from '../../assets/logohome.png';
import VideoIcon from '../../assets/Video.png';
import NotificationIcon from '../../assets/Notfication.png';
import ProfileIcon from '../../assets/Profile.png';
import LinkedInIcon from '../../assets/LinkedIn.png'; 

function Nav({ onMenuClick }) {
  return (
    <nav className='flex items-center lg:space-x-[26%] space-x-20 sticky m-0 p-0'>
      <div className='flex items-center w-full pl-6 cursor-pointer' onClick={onMenuClick}>
        <img className='w-10' src={MenuIcon} alt="Menu" />
        <img className='w-28' src={LogoIcon} alt="Logo" />
      </div>

      <div className='flex items-center w-full cursor-pointer'>
        <input
          type="text"
          className="px-3 py-1 lg:w-80 w-24 border rounded-md"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-8 w-6 opacity-70 bg-gray-100">
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd" />
        </svg>
      </div>

      <div className='flex items-center lg:space-x-3 w-full cursor-pointer'>
        <img className='w-8' src={VideoIcon} alt="Video" />
        <img className='w-8' src={NotificationIcon} alt="Notification" />
        <img className='lg:w-10 lg:h-10 w-8 h-8 rounded-full border-2 border-solid' src={ProfileIcon} alt="Profile" />

        <a className='w-full' href="https://www.linkedin.com/in/abdullaziz-alhazmi-919599271/" target="_blank" rel="noopener noreferrer">
          <img className='w-14' src={LinkedInIcon} alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
