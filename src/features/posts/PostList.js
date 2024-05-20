import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PostList=()=>{

    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts); // if structure of post ever changes -> just need to update the slice not every component
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(()=>{
        if (postsStatus == "idle")
            dispatch(fetchPosts());
    },[postsStatus,dispatch])

    
    const renderedPosts = posts.map((post)=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,75)}...</p>
            <PostAuthor userID={post.userId}></PostAuthor>&nbsp;&nbsp;&nbsp;
            <Link to={`post/${post.id}`}>View Post</Link>

        </div>
    ))

    let content;
    if(postsStatus == 'loading'){
        content = <label>Loading...</label>
    } else if(postsStatus == 'succeeded'){
        content = renderedPosts
    }
    else {
        content=<h3>ERROR: {postsError}</h3>
    }


    return (
        <div>
            <Link to='post'>Add New Post</Link>
            {content}
        </div>
    )
}

export default PostList;