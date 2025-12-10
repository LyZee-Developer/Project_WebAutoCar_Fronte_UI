import { createSlice } from "@reduxjs/toolkit";

const ThemeStore = createSlice({
    name:"theme",
    initialState:{
        isDark : false
    },
    reducers:{
        changeTheme :(state,actions)=>{
            console.log(actions)
            state.isDark=actions.payload;
        }
    }
})
export const {changeTheme} = ThemeStore.actions
export default ThemeStore.reducer;