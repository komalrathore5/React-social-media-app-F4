import  React from 'react';
import { useSelector } from "react-redux";
import {FaArrowCircleLeft } from "react-icons/fa";

const InfoPage = () => {
    const { loading, posts, error } = useSelector(state => state.infoid);
    console.log(loading, posts, error)
   
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

return(
    <div className='InfoPage-container'>
    <div className='post-number'>
    <h2> <FaArrowCircleLeft /> Post Number ID {posts.id}</h2>
    </div>
    <div className='details-container-pages'>
    <div className='image-title'>
    <img src={`https://picsum.photos/200?random=${posts.id}`} alt={posts.title} />
    <h3>Title: {posts.title}</h3>
    </div>
    <div className='details-container-part'>
    <button>Detail</button><span><button>User Info</button></span>
    <p>PostWas Posted By {posts.userId}</p>
   
    {/* <p>{post.body}</p> */}
    </div>
    </div>
</div>
)

}

export default InfoPage