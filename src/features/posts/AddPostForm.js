import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNewPost, postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm=()=>{

    const [title,setTitle] = useState("");
    const [body,setContent] = useState("");
    const [author,setAuthor] = useState("");
    const [addRequestStatus,setAddReqStatus] = useState("idle");

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const savePost=()=>{
        if (title && body && addRequestStatus ==="idle"){
            try{
                setAddReqStatus("pending")
                dispatch(
                    addNewPost({title,body,userId: author})
                ).unwrap()
                setTitle("")
                setContent("")
                setAuthor("")
            }
            catch (err){
                console.error("Error adding new post: "+err.message)
            } finally {
                setAddReqStatus("idle")
            }
        }
    }

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div>
            <h2>Add New Post</h2>
            <form>
                <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br></br>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value=""></option>
                    {userOptions}
                </select><br></br>
                <textarea placeholder="Post Content" value={body} onChange={(e)=>setContent(e.target.value)}></textarea><br></br>
                <button type="button" onClick={savePost}>Add</button>
            </form>
        </div>
    )
}

export default AddPostForm