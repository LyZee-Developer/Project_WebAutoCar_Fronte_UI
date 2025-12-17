import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgfix from '../assets/logo/logor.png'
import map from '../assets/image/map.png'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { useEffect, useState } from 'react'
import { setOwnInfo } from '../store/system/SystemStore'
import { socials } from '../utils/system_data'
import { https } from '../utils/https'
import type { IOwnerInfo } from '../interfaces/info/info'
const FooterPage = () => {
    var isDark = useSelector((state:RootState)=>state.system.isDark);
    const dispatch = useDispatch()
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const onClickOnMap=()=>{
        window.open("https://www.google.com/maps?ll=11.553453,104.821334&z=18&t=m&hl=en&gl=KH&mapclient=embed&cid=14629073525661475694")
    }
    var hasFetched = false;
    const [info,setInfo] = useState<IOwnerInfo>()
    var serviceList = useSelector((state:RootState)=>state.system.services);
    // Use an async function inside useEffect for async/await syntax
    const getData = async () => {
        setIsLoading(true);
        const {data,error} = await https({
            url:"http://localhost:8989/api/owner_info/list",
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
            console.log("->",data)
        if(data.length > 0 ){
            setIsLoading(false);
            setInfo(data[0])
            dispatch(setOwnInfo(data[0]))
        } 
    };
  useEffect(() => {
    if (hasFetched) return;
    hasFetched = true;
    getData();
  }, []); // Empty dependency array ensures it runs once on mount

  const onClickSocial=(social:any)=>{
    var link:string | undefined = "";
    if(social.code=="facebook") link=info?.FaceboolURL;
    else if(social.code=="instagram") link=info?.InstagramURL;
    else if(social.code=="telegram") link=info?.TelegramURL;
    else if(social.code=="youtube") link=info?.YoutubeURL;
    if(link!="" && link!=undefined) window.open(link,"_blank")
  }
  return (
    <div className={`w-full bg-black p-5 ${!isDark?"constrast":""}`}>
        <div className="grid w-full h-full max-[540px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-[1300px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
            <div className={`w-full h-full flex flex-col gap-y-10   `}>
                <div className='w-[160px]'><img src={imgfix} alt="" /></div>
                <div className='color-3'>
                    {info?.Description}
                </div>
                <div className='flex gap-x-4'>
                    {
                        socials.map(val=><>
                            {
                                !isLoading?(<><div className='w-[40px] h-[40px] rounded-full' onClick={()=>onClickSocial(val)}>
                                <img src={val.img} alt=""  className='w-full h-full object-contain' />
                            </div></>):(<div className='constrast '>
                            <div className='w-[40px] h-[40px]   bg-card animate-pulse rounded-full ' >
                            </div>
                            </div>)
                            }
                        </>)
                    }
                </div>
            </div>
            <div className={`w-full h-full   flex flex-col gap-y-4 `}>
                <div className='color-2'>Our Service</div>
                {
                    !isLoading?(<>
                    <div className='flex flex-col gap-y-3 font-bold text-[18px]'>
                        {
                            serviceList.length>0?(<>
                                {
                                    [...serviceList].slice(0,6).map(val=>(<>
                                        <div className='color-3'>{val.Title}</div>
                                    </>))
                                }
                            </>):(<></>)
                        }
                </div></>):(<><div className={`flex constrast flex-col gap-y-3 font-bold text-[18px]`}>
                    <div className='w-[200px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                    <div className='w-[180px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                    <div className='w-[200px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                    <div className='w-[200px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                    <div className='w-[100px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                    <div className='w-[180px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                </div></>)
                }
            </div>
            <div className={`w-full h-full   flex flex-col gap-y-4 `}>
                <div className='color-2'>Contact Us</div>
                {
                    !isLoading?(<><div className='flex gap-y-3 flex-col '>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        {
                           info?.WorkingInfo!="" && info?.WorkingInfo!=null  ?<><div>
                            <div className='text-[13px] color-2'>Working hours:</div>
                            <div className='text-[18px] color-4'>{info?.WorkingInfo}</div>
                        </div></>:""
                        }
                    </div>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                         {
                           info?.Phone1!="" && info?.Phone1!=null  ?<><div>
                             <div className='text-[13px] color-2'>Phone:</div>
                            <div className='text-[18px] color-4'>{info?.Phone} / {info?.Phone1}</div>
                        </div></>:""
                        }
                    </div>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div >
                            <div className='text-[13px] color-2'>Email:</div>
                            <div className='text-[18px] color-4'>{info?.Email}</div>
                        </div>
                    </div>
                </div></>):(<><div className='flex constrast gap-y-3 flex-col '>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='flex flex-col  gap-y-3'>
                             <div className='w-[80px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                              <div className='w-[200px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                        </div>
                    </div>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                             <div className='w-[80px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                              <div className='w-[200px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                        </div>
                    </div>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className='flex flex-col gap-y-3'>
                             <div className='w-[80px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                              <div className='w-[200px] h-[20px] color-4 rounded-2xl bg-card animate-pulse'></div>
                        </div>
                    </div>
                </div></>)
                }
            </div>
            {!isLoading?(<><div className="w-full h-full color-4 group relative cursor-pointer" onClick={()=>onClickOnMap()} >
                <img src={map} alt="" />
                <div className='w-full h-full transition-all ease-in-out group-hover:opacity-100 opacity-0 bg-[#00000067]  absolute top-0 left-0'></div>
                <div className='absolute left-1/2 top-1/2 -translate-y-1/2 group-hover:opacity-100! opacity-0 -translate-x-1/2 text-white'>Click to preview location</div>
            </div></>):(<div className='constrast'>
            <div className="w-[400px]   h-[150px]  rounded-xl animate-pulse bg-card color-4 group relative cursor-pointer" >
            </div></div>)}
           
        </div>
    </div>
  )
}

export default FooterPage