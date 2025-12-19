import backgroundWhite from '../assets/image/cosySec.png'
import background from '../assets/image/black.png'
import bwm from '../assets/image/BMW.svg.png'
import rr from '../assets/image/Rolls-Royce-Logo.jpg'
import lam from '../assets/image/lamb.png'
import fer from '../assets/image/ferrari-logo-png_seeklogo-512505.png'
import mas from '../assets/image/mazda-logo-png_seeklogo-89733.png'
import { Button } from '@heroui/react';
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import {isEmptyData, translate, ui} from '../utils/GlobalHelper'
import { SelectHeaderAction } from '../store/system/SystemStore'
import { useEffect, useState } from 'react'

const HeroSectionComponent=()=> {
    var isDark = useSelector((state:RootState)=>state.system.isDark);
    var info = useSelector((state:RootState)=>state.system.ownInfo);
    var tr = useSelector((state:RootState)=>state.system.language);
    const [loading,setLoading] = useState<boolean>(false);
    var scroll = useSelector((state:RootState)=>state.system.headerType);
    const dispatch = useDispatch()
    const onSelectHeader=(select:string)=>{
        if(scroll=="footer") select = "footer-btn";
        dispatch(SelectHeaderAction(select))
      }
    useEffect(()=>{
        console.log("info test",info)
        console.log(isEmptyData(info))
        setLoading(isEmptyData(info))
    },[info])
    var shape_style = "w-[100px] h-[100px] bg-card rounded-xl flex justify-center items-center";
    var transition = "transition-all duration-100 ease-in"
  return (
    <div className={`w-full h-[500px]  mt-10 ${isDark?"bg-black":"bg-white"} hero relative`}>
        <img src={`${isDark?background:backgroundWhite}`} alt="" className={`w-full object-contain  h-full ${ui.tr100}`}/>
        <div className={`absolute max-[960px]:left-[40px] max-[960px]:top-[10%] top-[20%] left-[80px] ${transition} gap-y-4 flex  flex-col`}> 
            <div className='max-w-[500px] flex flex-col gap-y-5 '>
                {
                    !loading?(<>
                        <div className=' max-[590px]:color-4! color-3'>{translate(info.SubDescription||"",info.SubDescriptionEnglish||"")}</div>
                        <div className='text-5xl font-medium   max-[590px]:text-[25px] color-4 typing-animation'>{translate(info.Name || "",info.EnglishName || "")}</div>
                        <div className='leading-[25px] max-[590px]:color-4! color-3 max-[510px]:hidden'>{translate(info.Description||"",info.DescriptionEnglish ||"")}</div>
                    </>):(<>
                        <div className={`max-[590px]:color-4!  w-[250px] h-[20px] color-3 ${ui.animation} `}></div>
                        <div className={`text-5xl font-medium w-[200px] h-[20px] max-[590px]:text-[25px] color-4 ${ui.animation} `}></div>
                        <div className={`leading-[25px] w-[400px] h-[17px] max-[590px]:color-4! color-3 max-[510px]:hidden ${ui.animation}`}></div>
                    </>)
                }
                
            </div>
            <div className='flex gap-x-3 max-[420px]:pt-5 max-[510px]:hidden'>  
                {
                    !loading?(<>
                        <Button size="lg" className={"rounded-lg  "} onPress={()=>{onSelectHeader("footer")}}>
                            {tr.contact_now}
                        </Button> 
                    </>):(<>
                         <div className={`max-[590px]:color-4!  w-[150px] h-[40px] color-3 ${ui.animation} `}></div>
                    </>)
                }
                 
            </div>
        </div>
        <div className='absolute bottom-10 max-[390px]:right-[65px] max-[325px]:right-[35px] overflow-hidden right-10 flex gap-x-4'>
            <div className="carousel max-[500px]:w-[400px]! max-[600px]:w-[500px]!">
                <div className="carousel-track">
                    {
                        [lam,rr,bwm,fer,mas,lam,rr,bwm,fer,mas].map((val,index)=>(
                        <>
                             <div
                                key={index}
                                className={`${shape_style} ${transition} 
                                max-[740px]:w-[70px] min-w-[70px] min-h-[70px] 
                                max-[740px]:h-[70px]`}
                            >
                                <img
                                src={val}
                                alt=""
                                className="object-contain cursor-pointer 
                                w-[60px] h-[60px] 
                                max-[740px]:w-[40px] max-[650px]:h-[40px]
                                transition-all duration-700 ease-in 
                                max-[650px]:duration-200 hover:rotate-360"
                                />
                            </div>
                        </>))
                    }
                </div>
            </div>  
        </div>
    </div>
  )
}

export default HeroSectionComponent