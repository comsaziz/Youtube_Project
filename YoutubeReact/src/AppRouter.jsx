import { Routes, Route } from 'react-router-dom';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import Home from './Components/Home/Home';
import Video from './Components/Video/Video';

function AppRouter() {  
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} /> 
      <Route path="/signin" element={<SigninPage />} /> 
      <Route path="/home" element={<Home />} /> 
      <Route path="/video/:videoId" element={<Video />} /> 
    </Routes>
  );
}

export default AppRouter;
