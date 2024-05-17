import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: "Komal Waseem"},
    {id: 2, name: "Hania Waseem"},
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // postAdded:{
        //     reducer(state,action){
        //         state.push(action.payload);
        //     },
        //     prepare(title,content){
        //         return {
        //             payload:{
        //                 id: nanoid(),
        //                 title,
        //                 content
        //             }
        //         }
        //     }
        // },
    }
})

export const selectAllUsers = (state) => state.users;

export const {} = usersSlice.actions;

export default usersSlice.reducer;