import React,{useEffect} from 'react';
import {FaArrowCircleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/apiActions";
import { useNavigate } from "react-router-dom";
import {infoid} from "../redux/actions/infoAction";
import { FaShareAlt, FaHeart} from "react-icons/fa";

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
}, [dispatch])

  if(!post) return <h1>Loading...</h1>

  function handleCardInfo(post) {
    dispatch(infoid(post));
    navigate(`/item/${post.userid}`);
}
  
  return (
    <div className='details-container'>
       <div className="post" key={post.id} onClick={() => {
                        handleCardInfo(post)
                    }}></div>
      <div className='post-number'>
      <h2> <FaArrowCircleLeft /> Post Number ID {post.id}</h2>
      </div>
      <div className='details-container-pages'>
      <div className='image-title'>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
      <h4>{post.title} <span> <FaShareAlt /> <FaHeart/></span></h4>
      
      </div>
      <div className='details-container-part'>
      <button>Detail</button><span><button onClick={handleCardInfo}>User Info </button></span>
      {/* <p>User ID: {post.userId}</p> */}
     
      <p>{post.body}</p>
      </div>
      </div>
  </div>
  )
 
}

export default DetailsPage
