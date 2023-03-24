import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom';
import {FavoriteBorderOutlinedIcon,ModeOutlinedIcon,FavoriteIcon,ReplyOutlinedIcon,SmsOutlinedIcon} from './icons_Index';

  const  Post=React.memo(({post,onShare})=> {
   const {name,imgeUrl, likes,  ProfileUrl, caption}=post;
   console.log('post rendered')
  let [isLiked,setIsLike]=useState(false);
  let [likesCount,setLikesCount]=useState(+likes);
  let  handleLike=()=>{
     setIsLike((prev)=>!prev);
  }
  
  let handleSharePost=()=>{
    onShare(post);
  }
  useEffect(()=>{
    setLikesCount((prevLikes)=>isLiked?prevLikes+1:prevLikes-1);
  },[isLiked])
  return (
   
         <div className="post card col-xs-7 col-md-5 m-3">
          <span className='col-12 m-1 d-flex justify-content-between p-2 '>
     <span className='d-flex'> <Link to="/Profile" style={{textDecoration:'none'}}><img className='profile-image 'src={ProfileUrl} alt="profile photo"></img>
      </Link>
      <h5 className='p-1 '>{name}</h5>
      </span>
      <span className=''> <ModeOutlinedIcon/></span>
       
       </span>

         
        <img className="card-img-top clear-fix" src={imgeUrl} alt="Card image cap"/>
      <div className="card-body">
     <h6 className='float-left p-1 '>{name}</h6>
    <p className="card-text p-1  float-left">{caption}</p>

    <hr className='clear-fix'/>


    <div className='d-flex justify-content-between'>
    <span onClick={handleLike}>{isLiked?<FavoriteIcon/>:<FavoriteBorderOutlinedIcon/>}{likesCount}</span>
    <span><SmsOutlinedIcon/>comment</span>
    <span onClick={handleSharePost}><ReplyOutlinedIcon/>share</span>
</div>
  </div>
</div>
    
   ) })
export default Post;
