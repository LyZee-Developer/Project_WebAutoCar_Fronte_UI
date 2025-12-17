import { createSlice } from "@reduxjs/toolkit";
import type { SystemState } from "../../interfaces/system";
const initialState : SystemState ={
    isDark : true,
    isShowNavLeftMenu:false,
    headerType:"",
    ownInfo: {},
    services:[],
}
const ThemeStore = createSlice({
    name:"theme",
    initialState,
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
        },
        setDataService :(state,actions)=>{
            state.services=actions.payload;
        }
    }
})
export const {changeTheme,setIsShowNavLeftMenu,SelectHeaderAction,setOwnInfo,setDataService} = ThemeStore.actions
export default ThemeStore.reducer;