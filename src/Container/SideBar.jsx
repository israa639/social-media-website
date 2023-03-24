import React from 'react'
// import FlutterDashIcon from '@mui/icons-material/FlutterDash';
 import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
 import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
 import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export function SideBar() {
  return (
    <nav className='sideBar-container d-flex flex-md-column col-3 '>
   
        <span className='side-item p-2 d-flex'><HomeOutlinedIcon/>Home</span>
        <span className='side-item p-2 d-flex'><MailOutlineOutlinedIcon/>Messages</span>
        <span className='side-item p-2 d-flex'><SettingsOutlinedIcon/>Settings</span>
        <span className='side-item p-2 d-flex'><NotificationsNoneIcon/>Notification</span>
        <span className='side-item p-2 d-flex'> <BookmarkBorderOutlinedIcon/>Saved items</span>
  
  
    </nav>
  )
}
