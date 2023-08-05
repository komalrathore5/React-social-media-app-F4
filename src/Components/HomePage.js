import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/apiActions";
import { useNavigate } from "react-router-dom";
import { addToDetails } from "../redux/actions/detailsActions";
import { FaAngleRight} from "react-icons/fa";

const HomePage = () => {
    const { loading, posts, error } = useSelector(state => state.posts);
    console.log(loading, posts, error)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    function handleCardDetails(post) {
        dispatch(addToDetails(post));
        navigate(`/item/${post.id}`);
    }

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>

    return (
        <div className="home-container">
            <div className="home-container-search"> 
                <h1>Social Media For Travellers</h1>
                <div className="Search-bar"><input type ="text" placeholder = "Search"/></div>
            </div> 
           <div  className="home-container-page">
            {posts && posts.map((post) => {
                return (
                    <div className="post" key={post.id} onClick={() => {
                        handleCardDetails(post)
                    }}>
                        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                        {/* <p>User ID: {post.userId}</p> */}
                        <h3> {post.title.slice(0, 30)}</h3>
                        <p> {post.body.slice(0, 50)},</p>
                        <p style ={{color:"#f95807", fontWeight: "900", display: "flex", justifyContent:"space-between"}}>Read More...<button style ={{backgroundColor:"#f95807", color: "white", border:"0.5rem", borderRadius: "5px", fontWeight:"500",fontSize:"2.4rem",marginBottom:"0px",width:"50px"}}> <FaAngleRight/></button></p>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default HomePage