import { createSlice } from "@reduxjs/toolkit";
import type { SystemState } from "../../interfaces/system";
import { country, getLanguage } from "../../utils/system_data";
const initialState : SystemState ={
    isDark : true,
    isShowNavLeftMenu:false,
    headerType:"",
    ownInfo: {},
    services:[],
    country:country[0],
    language:{"":""}
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
        },
        setCountry :(state,actions)=>{
            state.country=actions.payload;
            state.language = getLanguage(actions.payload.Code);
        },
        setLanguage :(state,actions)=>{
            state.language = getLanguage(actions.payload);
        }
    }
})
export const {changeTheme,setIsShowNavLeftMenu,SelectHeaderAction,setOwnInfo,setDataService,setCountry,setLanguage} = ThemeStore.actions
export default ThemeStore.reducer;