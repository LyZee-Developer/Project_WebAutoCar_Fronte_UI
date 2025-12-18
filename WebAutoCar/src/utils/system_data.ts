import { enqueueSnackbar } from "notistack";
import type { HeaderData } from "../interfaces/system";
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import telegram from '../assets/social/telegram.svg'
import youtube from '../assets/social/youtube.svg'
//flag
import ca from '../assets/flag/Flag_of_Cambodia.svg.webp'
import br from '../assets/flag/Flag_of_Brazil.svg.webp'
import la from '../assets/flag/Flag_of_Laos.svg.png'
import vn from '../assets/flag/Flag_of_Vietnam.svg.webp'
import us from '../assets/flag/Flag_of_the_United_States_(DDD-F-416E_specifications).svg.webp'
import type { Country } from "../interfaces/country/country";
//langauge
import lang_ca from '../language/km.json';
import lang_en from '../language/us.json';
import lang_br from '../language/br.json';
import lang_lao from '../language/lao.json';
import lang_vn from '../language/vn.json';
const currentYear: number = new Date().getFullYear();
const getYearsToCurrent = ():number[]=>{
    const years:number[] = [];
    var start_year :number = 1990;
    for(var year = start_year ; year <= currentYear; year++) {
        if(!years.includes(year)) years.push(year);
    }
    return years;
}
const getLanguage = (code:string) : Record<string, string> =>{
    var translate = {};
    console.log("get code",code)
    if(code=="us") translate = lang_en;
    else if(code=="cam") translate = lang_ca;
    else if(code=="vn") translate = lang_vn;
    else if(code=="br") translate = lang_br;
    else if(code=="lao") translate = lang_lao;
    return translate;
}
const country:Country[] = [
    {
        Code:"cam",
        Name:"ខ្មែរ",
        EnglishName:"Cambodia",
        Image:ca
    },
    {
        Code:"vn",
        Name:"វៀតណាម",
        EnglishName:"Vietnam",
        Image:vn
    },
    {
        Code:"us",
        Name:"អង់គ្លេស",
        EnglishName:"U.S.A",
        Image:us
    },
    {
        Code:"br",
        Name:"ប្រេហ្ស៊ីល",
        EnglishName:"Brazil",
        Image:br
    },
     {
        Code:"lao",
        Name:"ឡាវ",
        EnglishName:"Lao",
        Image:la
    }
]
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
export {header as data_header,duration,socials,country,getYearsToCurrent,ShowSnackBar,isEmptyData,getLanguage};