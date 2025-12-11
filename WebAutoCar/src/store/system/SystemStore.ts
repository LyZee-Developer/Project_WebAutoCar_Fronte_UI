import { createSlice } from "@reduxjs/toolkit";

const ThemeStore = createSlice({
    name:"theme",
    initialState:{
        isDark : false,
        isShowNavLeftMenu:false,
    },
    reducers:{
        changeTheme :(state,actions)=>{
            state.isDark=actions.payload;
        },
        setIsShowNavLeftMenu :(state,actions)=>{
            state.isShowNavLeftMenu=actions.payload;
        }
    }
})
export const {changeTheme,setIsShowNavLeftMenu} = ThemeStore.actions
export default ThemeStore.reducer;