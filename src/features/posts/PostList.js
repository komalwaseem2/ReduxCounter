import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostList=()=>{

    const posts = useSelector(selectAllPosts); // if structure of post ever changes -> just need to update the slice not every component
    
    const renderedPosts = posts.map((post)=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <PostAuthor userID={post.author}></PostAuthor>
        </div>
    ))

    return (
        <div>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default PostList;