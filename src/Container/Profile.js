import React, { useState } from 'react'
import Post from '../components/Post';
import {profilePosts} from '../data';
export  function Profile() {
  let [ProfilePosts,setProfilePosts]=useState(profilePosts);
  return (
   
    <div className='profile '>
     
        <img className='col-12 p-1 cover-photo'src='assets\\pexels-taryn-elliott-3889742.jpg'/>
  
      <img className='profile-photo'src='assets\\pexels-mike-b-171183.jpg'></img>

      {ProfilePosts.map((post)=>{
        
        return <Post post={post}/>
      })}
      
    </div>
  )
}
