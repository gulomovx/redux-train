import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./Data";

const userSlice = createSlice({
    name: 'users',
    initialState: UserList,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const uu = state.find(user => user.id == id)
            if (uu) {
                uu.name = name
                uu.email=email
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const uu = state.find(user => user.id == id)
            if (uu) {
                return state.filter(f=> f.id!==id)
            }
        }
    }
})


export const {addUser, updateUser, deleteUser}=userSlice.actions
export default userSlice.reducer

