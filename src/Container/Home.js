import React, { useState,useCallback,useMemo } from 'react'
import  Post  from '../components/Post'
import {homePosts} from '../data';
import { Notification } from '../components/Notification';

export  function Home() {
  let [HomePosts,setHomePosts]=useState([...homePosts]);
  let [showNotification,setShowNotification]=useState(false);
  console.log('rendered again ',HomePosts)
  let handleSharePost=useCallback((post)=>{
    setHomePosts((prevPosts)=>[{...post,id:prevPosts.length+1, name:'israa'},...prevPosts])
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
              }, 3000);
  },[])
  return (
  
    <div className='Home'>
      {HomePosts.map((post)=>
       <span key ={post.id}> <Post post={post} onShare={handleSharePost}/></span>
      )}
      {showNotification&&<Notification message={'post shared Successfully'}/>}
      
  </div>
  )
}
