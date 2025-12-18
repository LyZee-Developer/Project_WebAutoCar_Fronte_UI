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
    getDataAboutUs();
  }, []); 
  useEffect(() => {
    getDataAboutUsDet();
  }, [aboutUs]); 


    const getDataAboutUs = async () => {
        setIsLoading(true);
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
            setIsLoading(false);
            console.log("about lst : ",data)
            var checkList = data?.filter((v:any)=>v.Type=="AboutUs");
           setAboutUs(checkList[0])
        } 
    };
    const getDataAboutUsDet = async () => {
        const {data,error} = await https({
            url:"http://localhost:8989/api/block_content_detail/list",
            data:{
                Id:0,
                Search:"",
                OrderBy:"Id",
                OrderDir:"desc",
                IsComplete:true,
                Page:1,
                Record:10,
                ContentBlockId:aboutUs?.Id
            },
            method:"post"
        });
        if(data.length > 0 ){
            console.log("detail ",data)
            setIsLoading(false);
            setAboutUsDetail(data)
        }else {
            if(error!=undefined) ShowSnackBar(error)
        }
    };


 
 
  return (
    <div className={`mt-5 pt-20 w-full  ${!isDark?"bg-black constrast":""}   rounded-3xl  p-10   max-w-[1500px] mx-auto `}>
        <div className="max-[900px]:flex flex-col max-[600px]:p-0 p-10 grid flex-wrap items-start grid-cols-[1fr_1fr]">
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover rounded-2xl' src={imgfix} alt="" />
            </div>
            <div className='pl-10 max-[900px]:pl-0 '>
                <div className='flex flex-col gap-y-2'>
                    <div className='color-3'>{tr.about_us}</div>
                    <div className='text-[30px] color-4 font-medium flex gap-x-3 '>
                        <div className='w-[40px] h-[40px]'>
                            <img src={hand} className='w-full h-full ' alt="" />
                        </div >
                        <div className='max-[400px]:text-[20px]'>
                            {tr.why_choose} {translate(info.Name || "",info.EnglishName || "")}
                        </div>
                    </div>
                    <div className='color-2'>{translate(aboutUs?.Title || "",aboutUs?.TitleEnglish || "")}</div>
                </div>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
                    {aboutUsDetail.map(val=>(<div className={`flex flex-col gap-y-4 w-full pt-5 rounded-2xl  ${val}`}>
                        <div className='flex gap-x-2'>
                            <div className='w-[18px] h-[18px]'><img src={setting_point} className='w-full h-full' alt="" /></div>
                            <div className='font-medium text-[20px] max-[400px]:text-[16px] color-4'>{translate(val.Title,val.TitleEnglish)}</div>
                        </div>
                        <div className='color-3'>{translate(val.Description,val.DescriptionEnglish)}</div>
                    </div>))}
                </div>
            </div>
        </div>
        <div className='w-full px-10 '>
            <div className='w-full h-[2px] mt-10 relative'>
                <div className='w-full h-full bg-[#ffffff36]'></div>
                <div className='text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black px-4'>{tr.our_partner_support}</div>
            </div>
            <div className='flex mt-10 gap-x-8 mb-8'>
                <div className="carousel w-full!">
                    <div className="carousel-track">
                        {
                            !isLoading?(<>{
                                [...listPartner].map(val=>(<div className={`flex items-center gap-x-3 ${val.Id}`}>
                                <img src={val.PathImage==""?noimage:`http://localhost:8989/${val.PathImage}`} alt="" className="w-[40px] h-[40px] rounded-full" />
                                <div className='text-white'>{val.Name}</div>
                            </div>))
                            }</>):(<>
                                {
                                    [1,2,3,4,5,6].map(val=>(<div className={`flex items-center ${val}`}>
                                        <div className={`w-[80px] h-[80px] rounded-full ${ui.animation}`}></div>
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