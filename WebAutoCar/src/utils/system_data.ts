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
import ch from '../assets/flag/Flag_of_the_Peoples_Republic_of_China.webp'
import ida from '../assets/flag/Flag_of_India.svg.webp'
import ind from '../assets/flag/Flag_of_Indonesia.svg.webp'
import my from '../assets/flag/Flag_of_Myanmar.svg.webp'
import us from '../assets/flag/Flag_of_the_United_States_(DDD-F-416E_specifications).svg.webp'

import type { Country } from "../interfaces/country/country";
//langauge
import lang_ca from '../language/km.json';
import lang_en from '../language/us.json';
import lang_br from '../language/br.json';
import lang_lao from '../language/lao.json';
import lang_vn from '../language/vn.json';
import lang_ch from '../language/ch.json';
import lang_my from '../language/my.json';
import lang_ind from '../language/ind.json';
import lang_ida from '../language/ida.json';
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
    else if(code=="ch") translate = lang_ch;
    else if(code=="my") translate = lang_my;
    else if(code=="ind") translate = lang_ind;
    else if(code=="ida") translate = lang_ida;
    return translate;
}
const country:Country[] = [
    {
        code:"cam",
        name:"ខ្មែរ",
        englishName:"Cambodia",
        image:ca
    },
     {
        code:"us",
        name:"អង់គ្លេស",
        englishName:"U.S.A",
        image:us
    },
     {
        code:"ch",
        name:"ចិន",
        englishName:"China",
        image:ch
    },
    {
        code:"vn",
        name:"វៀតណាម",
        englishName:"Vietnam",
        image:vn
    },
    {
        code:"br",
        name:"ប្រេហ្ស៊ីល",
        englishName:"Brazil",
        image:br
    },
    {
        code:"lao",
        name:"ឡាវ",
        englishName:"Lao",
        image:la
    },
    {
        code:"ind",
        name:"ឥណ្ឌូនេស៊ី",
        englishName:"Indonesia",
        image:ind
    },
    {
        code:"ida",
        name:"ឥណ្ឌា",
        englishName:"India",
        image:ida
    },
    {
        code:"my",
        name:"មីយ៉ាន់ម៉ា",
        englishName:"Myanmar",
        image:my
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
            code:"booking_appointment",
            title:"កក់ការណាត់ជួប",
            titleEnglish:"Booking Appointment"
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
        borderRadius: 15
      },
    });

}

export {header as data_header,duration,socials,country,getYearsToCurrent,ShowSnackBar,getLanguage};