import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { useEffect } from "react";

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
            <p>{post.body.substring(0,100)}</p>
            <PostAuthor userID={post.userId}></PostAuthor>
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
            <h2>Posts</h2>
            {content}
        </div>
    )
}

export default PostList;