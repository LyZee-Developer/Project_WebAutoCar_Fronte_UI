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
            code:"contact_us",
            title:"Contact Us",
            titleEnglish:"Contact Us"
        }
    ] 
export {header as data_header,getYearsToCurrent};