import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, getPostByID, postAdded } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { useParams } from "react-router-dom";

const SinglePost=()=>{

    const {postId} = useParams();

    const post = useSelector((state)=>getPostByID(state, Number(postId)));

    if(!post){
        return(
            <h2>
                Error: Post not found!
            </h2>
        )
    }
    
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <PostAuthor userID={post.userId}></PostAuthor>
        </div>
    )
}

export default SinglePost