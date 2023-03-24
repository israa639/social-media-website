import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
export  function NavBar() {
  return (
    <header className='NavBar row'>
      <span className='col-3 d-flex justify-content-center'>
      
      <Link to="/" style={{textDecoration:'none'}}><h1>F</h1></Link>
      </span>
      <div className='search-bar col-6 m-2'> 
      
       <input className='col-11 p-1' placeholder='Search for people , pages , and posts'></input>
       <span className='search-icon col-1'> 
       <SearchIcon/>
       </span>
       </div>
       <span className='col-2 m-1 d-flex'>
      <Link to="/Profile" style={{textDecoration:'none'}}><img className='profile-image 'src='assets\cute-girl-pretty-adorable-girl-pink-shirt-with-red-lipstick-covering-mouth-with-lollipop.jpg' alt="profile phote"></img>
      </Link>
      <h5 className='p-1'>israa</h5>
       </span>
      
    </header>
  )
}
