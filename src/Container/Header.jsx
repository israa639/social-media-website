import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
// import FlutterDashIcon from '@mui/icons-material/FlutterDash';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
// import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
// import SendIcon from '@mui/icons-material/Send';
// import CheckIcon from '@mui/icons-material/Check';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
export  function Header() {
  return (
    <header className='Header row'>
      <span className='col-3 d-flex justify-content-center'>
      <h1>H</h1>
      </span>
      <div className='search-bar col-6 m-2'> 
      
       <input className='col-11 p-1' placeholder='Search for people , pages , and posts'></input>
       <span className='search-icon col-1'> 
       <SearchIcon/>
       </span>
       </div>

      <span className='col-2 m-1'>
       <img className='profile-image 'src='assets\cute-girl-pretty-adorable-girl-pink-shirt-with-red-lipstick-covering-mouth-with-lollipop.jpg' alt="profile phote"></img>
       </span>
    </header>
  )
}
