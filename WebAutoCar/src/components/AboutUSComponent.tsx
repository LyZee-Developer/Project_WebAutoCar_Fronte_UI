import { useSelector } from 'react-redux'
import imgfix from '../assets/service/prop.jpg'
import hand from '../assets/service/hand-gear.svg'
import setting_point from '../assets/service/setting-point.svg'
import noimage from '../assets/system/no_image.jpg'
import type { RootState } from '../store/store'
import { useEffect, useState } from 'react'
import { https } from '../utils/https'
import type { PartnerSupport } from '../interfaces/partner/partner'
import { translate, ui } from '../utils/GlobalHelper'
import { ShowSnackBar } from '../utils/system_data'
import type { AboutUs, AboutUsDetail } from '../interfaces/aboutus/about_us'
const AboutUSComponent = () => {
    var isDark = useSelector((state:RootState)=>state.system.isDark);
    const tr = useSelector((state:RootState)=>state.system.language);
    const info = useSelector((state:RootState)=>state.system.ownInfo);
    const [listPartner,setListPartner] = useState<PartnerSupport[]>([]);
    const [aboutUs,setAboutUs] = useState<AboutUs>();
    const [aboutUsDetail,setAboutUsDetail] = useState<AboutUsDetail[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const [isLoadingAboutUs,setIsLoadingAboutUs]=useState<boolean>(false);
    const getData = async () => {
        setIsLoading(true);
        const {data} = await https({
            url:"http://localhost:8989/api/partner_support/list",
            data:{
                Id:0,
                Search:"",
                OrderBy:"Id",
                OrderDir:"desc",
                IsComplete:false,
                Page:1,
                Record:10
            },
            method:"post"
        });
        if(data.length > 0 ){
            setIsLoading(false);
            setListPartner(data)
        }
    };
  useEffect(() => {
    getData();
    
  }, []); 
 useEffect(() => {
    getDataAboutUs();
  }, [listPartner]); 

    const getDataAboutUs = async () => {
        setIsLoadingAboutUs(true);
        const {data} = await https({
            url:"http://localhost:8989/api/block_content/list",
            data:{
                Id:0,
                Search:"",
                OrderBy:"Id",
                OrderDir:"desc",
                IsComplete:false,
                Page:1,
                Record:10
            },
            method:"post"
        });
        if(data.length > 0 ){
            setIsLoadingAboutUs(false);
            console.log("about lst : ",data)
            var checkList = data?.filter((v:any)=>v.Type=="AboutUs");
           setAboutUs(checkList[0])
           getDataAboutUsDet();
        } 
    };
    const getDataAboutUsDet = async () => {
        const {data,error} = await https({
            url:"http://localhost:8989/api/block_content_detail/list",
            data:{
                id:0,
                search:"",
                orderBy:"Id",
                orderDir:"desc",
                isComplete:true,
                page:1,
                record:10,
                contentBlockId:aboutUs?.Id
            },
            method:"post"
        });
        if(data.length > 0 ){
            console.log("detail ",data)
            setIsLoadingAboutUs(false);
            setAboutUsDetail(data)
        }else {
            if(error!=undefined) ShowSnackBar(error)
        }
    };


 
 
  return (
    <div className={`mt-5 pt-20 w-full max-[1300px]:p-2 max-[1600px]:px-30 max-[1600px]:py-2  max-[830px]:p-2 max-[430px]:py-2 max-[780px]:py-2 ${!isDark?"bg-black constrast":""}  max-[430px]:px-2 rounded-3xl  p-10   max-w-[1500px] mx-auto `}>
        <div className="max-[900px]:flex flex-col max-[830px]:p-2 max-[600px]:p-0 max-[780px]:p-2 max-[820px]:p-2  p-10 grid flex-wrap items-start grid-cols-[1fr_1fr]">
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover rounded-2xl' src={imgfix} alt="" />
            </div>
            <div className='pl-10 max-[900px]:pl-0 '>
                <div className='flex flex-col gap-y-2'>
                    <div className='color-3 max-[430px]:mt-5 mt-4'>{tr.about_us}</div>
                    <div className='text-[30px] color-4 font-medium flex gap-x-3 '>
                        <div className='w-[40px] h-[40px]'>
                            <img src={hand} className='w-full h-full ' alt="" />
                        </div >
                        
                        <div className='max-[430px]:text-[20px] flex gap-x-3 items-center'>
                            <div>{tr.why_choose}</div>
                            {!isLoadingAboutUs?(<>
                                <div> {translate(info?.Name || "",info?.EnglishName || "")}</div>
                            </>):(<>
                                <div className={`w-[200px] h-[19px] rounded-md ${ui.animation}`}></div>
                            </>)}
                        </div>
                        
                    </div>
                    {
                        !isLoadingAboutUs?(<><div className='color-2'>{translate(aboutUs?.Title || "",aboutUs?.TitleEnglish || "")}</div></>):(<>
                            <div className={`w-full h-[19px] rounded-md ${ui.animation}`}></div>
                            <div className={`w-[50%] h-[19px] rounded-md ${ui.animation}`}></div>
                        </>)
                    }
                    
                </div>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5'>
                    {
                        !isLoadingAboutUs?(<>
                        {
                            aboutUsDetail.map(val=>(<div className={`flex flex-col gap-y-4 w-full pt-5 rounded-2xl  ${val}`}>
                            <div className='flex gap-x-2'>
                                <div className='w-[18px] h-[18px]'><img src={setting_point} className='w-full h-full' alt="" /></div>
                                <div className='font-medium text-[20px] max-[430px]:text-[16px] color-4'>{translate(val?.Title,val?.TitleEnglish)}</div>
                            </div>
                            <div className='color-3'>{translate(val?.Description,val?.DescriptionEnglish)}</div>
                        </div>))
                        }</>):(<>
                            {
                                [1,2,3,4,5,6].map(val=>(<div className={`flex flex-col gap-y-4 w-full pt-5 rounded-2xl  ${val}`}>
                                    <div className='flex gap-x-2'>
                                        <div className='w-[18px] h-[18px]'><img src={setting_point} className='w-full h-full' alt="" /></div>
                                        <div className={`w-full h-[19px] rounded-md ${ui.animation}`}></div>
                                    </div>
                                    <div className={`w-[50%] h-[30px] rounded-md ${ui.animation}`}></div>
                                </div>))
                            }
                        </>)
                        
                    }
                </div>
            </div>
        </div>
        <div className='w-full px-10 max-[430px]:px-2'>
            <div className='w-full h-[2px] mt-10 relative'>
                <div className='w-full h-full bg-[#ffffff36]'></div>
                <div className='text-white absolute max-[830px]:px-0 top-1/2 left-1/2 -translate-y-1/2 max-[370px]:px-0 -translate-x-1/2 bg-black px-4'>{tr.our_partner_support}</div>
            </div>
            <div className='flex mt-10 gap-x-8 mb-8 '>
                <div className="carousel w-full!">
                    <div className="carousel-track">
                        {
                            !isLoading?(<>{
                                [...listPartner].map(val=>(<div className={`flex items-center gap-x-3 ${val?.Id}`}>
                                <img src={val?.PathImage==""?noimage:`http://localhost:8989/${val?.PathImage}`} alt="" className="w-[40px] h-[40px] rounded-full" />
                                <div className='text-white'>{val?.Name}</div>
                            </div>))
                            }</>):(<>
                                {
                                    [1,2,3,4,5,6].map(val=>(<div className={`flex gap-x-3 items-center ${val}`}>
                                        <div className={`w-[40px] h-[40px] rounded-full ${ui.animation}`}></div>
                                        <div className={`w-[150px] h-[20px] rounded-xl ${ui.animation}`}></div>
                                    </div>))
                                }
                            </>)
                            
                        }
                    </div>
                </div>
                
            </div>
        </div>
         
    </div>
  )
}

export default AboutUSComponent