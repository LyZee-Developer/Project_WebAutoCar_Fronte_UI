import { enqueueSnackbar } from "notistack";
import type { HeaderData } from "../interfaces/system";
const currentYear: number = new Date().getFullYear();
const getYearsToCurrent = ():number[]=>{
    const years:number[] = [];
    var start_year :number = 1990;
    for(var year = start_year ; year <= currentYear; year++) {
        if(!years.includes(year)) years.push(year);
    }
    return years;
}
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

const ShowSnackBar=(message:string)=>{
     enqueueSnackbar(message, {
      style: {
        backgroundColor: 'green', // Set the background color
        color: 'white', // Set the text color
      },
    });

}
export {header as data_header,duration,getYearsToCurrent,ShowSnackBar};