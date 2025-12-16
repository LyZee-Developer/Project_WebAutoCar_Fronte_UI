import { createSlice } from "@reduxjs/toolkit";

const ThemeStore = createSlice({
    name:"theme",
    initialState:{
        isDark : true,
        isShowNavLeftMenu:false,
        headerType:"",
        ownInfo:{}
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
        },
        setOwnInfo :(state,actions)=>{
            state.ownInfo=actions.payload;
        }
    }
})
export const {changeTheme,setIsShowNavLeftMenu,SelectHeaderAction,setOwnInfo} = ThemeStore.actions
export default ThemeStore.reducer;