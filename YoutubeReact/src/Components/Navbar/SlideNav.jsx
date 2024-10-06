import './SlideNav.css';
import HomeIcon from '../../assets/Home.png';
import ShortsIcon from '../../assets/Shorts.png';
import SubscriptionIcon from '../../assets/Subscription.png';
import HistoryIcon from '../../assets/History.png';
import PlaylistIcon from '../../assets/Playlist.png';
import WatchLaterIcon from '../../assets/Watchlater.png';
import LikeIcon from '../../assets/Like.png';
import TrendingIcon from '../../assets/Trending.png';
import MusicIcon from '../../assets/Music.png';
import LiveIcon from '../../assets/Live.png';
import GamingIcon from '../../assets/Gaming.png';
import TrophyIcon from '../../assets/Trofie.png';
import LogoIcon from '../../assets/logo.png';
import YotubeMusicIcon from '../../assets/YotubeMusic.png';
import YouTubeKidsIcon from '../../assets/Youtubekids..png';
import SettingIcon from '../../assets/Setting.png';
import FlagIcon from '../../assets/Flag.png';
import QuestionIcon from '../../assets/Question.png';
import FeedbackIcon from '../../assets/Feedback.png';
import { Link } from 'react-router-dom'; 

function SlideNav({ showText }) {
  return (
    <div>
      <div className='flex flex-col w-full mb-5'>
        <div className='flex  mb-2'>
          <Link to="/Home" className='flex ml-6 mb-2'> 
            <img className='nav-icon' src={HomeIcon} alt="Home" />
            {showText && <p className='nav-text'>Home</p>}
          </Link>
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={ShortsIcon} alt="Shorts" />
          {showText && <p className='nav-text'>Shorts</p>}
        </div>
        <div className='flex ml-6 mb-1'>
          <img className='nav-icon' src={SubscriptionIcon} alt="Subscription" />
          {showText && <p className='nav-text'>Subscription</p>}
        </div>
      </div>
      <hr className='h-[1px] border-0 w-[100%] bg-[#ccc] mb-5' />

      <h3 className='mb-2 ml-6 cursor-pointer'>{showText ? 'Your >' : ''}</h3>
      <div className='flex flex-col w-full mb-5'>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={HistoryIcon} alt="History" />
          {showText && <p className='nav-text'>History</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={PlaylistIcon} alt="Playlist" />
          {showText && <p className='nav-text'>Playlist</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={WatchLaterIcon} alt="Watch later" />
          {showText && <p className='nav-text'>Watch later</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={LikeIcon} alt="Liked video" />
          {showText && <p className='nav-text'>Liked video</p>}
        </div>
      </div>
      <hr className='h-[1px] border-0 w-[100%] bg-[#ccc] mb-5' />

      <h3 className='mb-2 ml-6 cursor-pointer'>{showText ? 'Explore' : ''}</h3>
      <div className='flex flex-col w-full mb-5'>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={TrendingIcon} alt="Trending" />
          {showText && <p className='nav-text'>Trending</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={MusicIcon} alt="Music" />
          {showText && <p className='nav-text'>Music</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={LiveIcon} alt="Live" />
          {showText && <p className='nav-text'>Live</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={GamingIcon} alt="Gaming" />
          {showText && <p className='nav-text'>Gaming</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={TrophyIcon} alt="Sport" />
          {showText && <p className='nav-text'>Sport</p>}
        </div>
      </div>
      <hr className='h-[1px] border-0 w-[100%] bg-[#ccc] mb-5' />

      {showText && <h3 className='mb-2 ml-6 cursor-pointer'>More from YouTube</h3>}
      <div className='flex flex-col w-full mb-5'>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={LogoIcon} alt="YouTube Premium" />
          {showText && <p className='nav-text'>YouTube Premium</p>}
        </div>
        <div className='flex ml-6 w-10'>
          <img className='w-9 h-6 mr-4 mt-1 cursor-pointer' src={YotubeMusicIcon} alt="YouTube Music" />
          {showText && <p className='nav-text'>YouTube Music</p>}
        </div>
        <div className='flex ml-6 mt-5 w-9'>
          <img className='w-8 mr-5 cursor-pointer' src={YouTubeKidsIcon} alt="YouTube Kids" />
          {showText && <p className='nav-text'>YouTube Kids</p>}
        </div>
      </div>
      <hr className='h-[1px] border-0 w-[100%] bg-[#ccc] mb-5' />

      <div className='flex flex-col w-full'>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={SettingIcon} alt="Setting" />
          {showText && <p className='nav-text'>Setting</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={FlagIcon} alt="Report history" />
          {showText && <p className='nav-text'>Report history</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={QuestionIcon} alt="Help" />
          {showText && <p className='nav-text'>Help</p>}
        </div>
        <div className='flex ml-6 mb-2'>
          <img className='nav-icon' src={FeedbackIcon} alt="Send Feedback" />
          {showText && <p className='nav-text'>Send Feedback</p>}
        </div>
      </div>
    </div>
  );
}

export default SlideNav;
