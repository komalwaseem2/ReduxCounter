import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'First Post',content: "This is my first post!", author: 1},
    {id: 2, title: 'Second Post',content: "This is my second post!", author:2},
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(title,content,author){
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        author
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;