import { enqueueSnackbar } from "notistack";
import type { HeaderData } from "../interfaces/system";
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import telegram from '../assets/social/telegram.svg'
import youtube from '../assets/social/youtube.svg'
const currentYear: number = new Date().getFullYear();
const getYearsToCurrent = ():number[]=>{
    const years:number[] = [];
    var start_year :number = 1990;
    for(var year = start_year ; year <= currentYear; year++) {
        if(!years.includes(year)) years.push(year);
    }
    return years;
}
const socials = [
    {
        code:"facebook",
        img:facebook
    },
    {
        code:"youtube",
        img:youtube
    },
    {
        code:"telegram",
        img:telegram
    },
    {
        code:"instagram",
        img:instagram
    },
]
const duration=[4000,3800,2400,1500,4500,6000,3500,8000]
const header:HeaderData[] = [
        {
            code:"home",
            title:"Home",
            titleEnglish:"Home"
        },
        {
            code:"our_service",
            title:"Our Service",
            titleEnglish:"Our Service"
        },
        {
            code:"our_work",
            title:"Our Work",
            titleEnglish:"Our Work"
        },
        {
            code:"about_us",
            title:"About Us",
            titleEnglish:"About Us"
        },
        {
            code:"portfolio",
            title:"Portfolio",
            titleEnglish:"Portfolio"
        },
        {
            code:"contact_us",
            title:"Contact Us",
            titleEnglish:"Contact Us"
        }
    ] 

const ShowSnackBar=(message:string,type:string="")=>{
    var backgroundColor = "green";
    var color = "white";
    if (type.toLocaleLowerCase()=="error") {
        backgroundColor="#ffd2d2";
        color="red";
    }
    enqueueSnackbar(message, {
      style: {
        backgroundColor: backgroundColor, // Set the background color
        color: color, // Set the text color
      },
    });

}
const isEmptyData=(data:any):any=>{
    return data=="" || data==null || data==undefined || data?.length==0;
}
export {header as data_header,duration,socials,getYearsToCurrent,ShowSnackBar,isEmptyData};