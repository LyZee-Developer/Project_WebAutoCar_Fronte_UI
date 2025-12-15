import { createSlice } from "@reduxjs/toolkit";

const ThemeStore = createSlice({
    name:"theme",
    initialState:{
        isDark : false,
        isShowNavLeftMenu:false,
        headerType:""
    },
    reducers:{
        changeTheme :(state,actions)=>{
            state.isDark=actions.payload;
        },
        SelectHeaderAction :(state,actions)=>{
            state.headerType=actions.payload;
        },
        setIsShowNavLeftMenu :(state,actions)=>{
            state.isShowNavLeftMenu=actions.payload;
        }
    }
})
export const {changeTheme,setIsShowNavLeftMenu,SelectHeaderAction} = ThemeStore.actions
export default ThemeStore.reducer;