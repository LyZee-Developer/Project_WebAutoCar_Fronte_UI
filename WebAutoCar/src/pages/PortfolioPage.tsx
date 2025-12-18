import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useRef, useState } from "react";
// import 'swiper/bundle';
// const swiper = useSwiper();
import type { Swiper as SwiperType } from "swiper";
import { duration, ShowSnackBar } from "../utils/system_data";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { https } from "../utils/https";
import type { Portfolio } from "../interfaces/portfolio/data";
import { ui } from "../utils/GlobalHelper";
const PortfolioPage = () => {
    const [ldata,setLData] = useState<Portfolio[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const getData = async () => {
        setIsLoading(true);
        const {data,error} = await https({
            url:"http://localhost:8989/api/portfolio/list",
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
        console.log("data",data)
        if(data.length > 0 ){
            setIsLoading(false); 
            if (data!=undefined) setLData(data)
        } else if(error!=undefined) ShowSnackBar(error)
    };
   
    useEffect(() => {
        getData();
    }, []); // Empty dependency array ensures it runs once on mount
    const swiperRef = useRef<SwiperType | null>(null);
    const tr = useSelector((state:RootState)=>state.system.language);
    var Duration=2000;
    const onClickBack=(behavior:string)=>{
        if(behavior=="front") swiperRef.current?.slideNext()
        else swiperRef.current?.slidePrev()
    }
    const [windowSize, setWindowSize] = useState<{width:number | undefined , height:number | undefined }>({
            width: undefined,
            height: undefined,
        });
    const [rowSlide,setRowSlide]= useState<number>(6);
     function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
    }
    const checkSizeColumn=()=>{
        if(windowSize.width !=undefined){
            if(windowSize?.width > 1400) setRowSlide(6);
            if(windowSize?.width < 1400 && windowSize?.width>1000) setRowSlide(4);
            if(windowSize?.width < 1000 && windowSize?.width>800) setRowSlide(3);
            if(windowSize?.width < 800 && windowSize?.width>470) setRowSlide(2);
            if(windowSize?.width < 470 && windowSize?.width>100) setRowSlide(1);
        }
    }
    useEffect(()=>{
        handleResize();
    },[])
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        if(windowSize.width !=undefined) checkSizeColumn()
    }, [windowSize.width]);
  return (
    <div className="w-full py-10">
        <div className="max-w-[1200px] mx-auto py-5">
            <p className="color-2 pl-5">{tr.portfolio}</p>
            <div className="w-full flex justify-between items-center px-5">
                <div className="text-[40px] max-[600px]:text-[25px]  max-[400px]:text-[22px] font-medium color-4 ">{tr.we_are_proud_of_our_recent_success_work}</div>
                <div className="flex gap-x-6">
                    <div onClick={()=>onClickBack("back")} className="bg-card cursor-pointer p-3 rounded-full w-[55px] flex justify-center items-center h-[55px] color-3 "><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div onClick={()=>onClickBack("front")} className="bg-card cursor-pointer p-3 rounded-full w-[55px] flex justify-center items-center h-[55px] color-3 "><FontAwesomeIcon icon={faArrowRight} /></div>
                </div>
            </div>
        </div>
        <div className="w-full px-10 select-none cursor-pointer">
            {
               ldata.length>0 && !isLoading?(<>
                <Swiper
                    spaceBetween={30}
                    className="h-[400px] "
                    slidesPerView={rowSlide}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >

                 {
                        ldata.map(val=>{
                                Duration=duration[Math.floor(Math.random()*duration.length)];
                                return (
                                    <>
                                    <SwiperSlide key={val.Id} className="h-full w-full bg-card">
                                            <Swiper
                                                className="h-full w-full"
                                                modules={[Navigation,Autoplay, Pagination]}
                                                autoplay={{
                                                    delay: Duration,
                                                    disableOnInteraction: false,
                                                }}
                                                navigation
                                                pagination={{ clickable: true }}
                                            >
                                                {
                                                    !isLoading?(<>
                                                        {
                                                        val.Images.map(v=><SwiperSlide key={v.Id} className="w-full h-full flex justify-center items-center">
                                                            <img src={`${v.HostUrl}/${v.PathImage}`} alt="" className="object-contain w-full h-full" />
                                                        </SwiperSlide>)
                                                        }
                                                    </>):(<>
                                                        {[1,2,3,4,5].map(val=>(<div className={`w-full ${val}  h-[300px] ${ui.animation} `}>
                                                        </div>))}
                                                    </>) 
                                                }
                                            </Swiper>
                                    </SwiperSlide>
                                    </>
                                )
                            })
                    }   
                    
                </Swiper>
               </>):(<>
                <Swiper
                    spaceBetween={30}
                    className="h-[400px] "
                    slidesPerView={rowSlide}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >
                        <SwiperSlide className="h-full w-full bg-card">
                                <Swiper
                                    className="h-full w-full"
                                    modules={[Navigation,Autoplay, Pagination]}
                                    autoplay={{
                                        delay: Duration,
                                        disableOnInteraction: false,
                                    }}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    {
                                    [1,2,3,4,5].map(val=>(<div className={`w-full ${val} h-[300px] ${ui.animation} `}>
                                            </div>))
                                    }
                                </Swiper>
                        </SwiperSlide>
                    </Swiper>
               
               </>) 
            }
              
        </div>
        {/* <div className="w-full flex py-5 flex-col gap-y-3 justify-center items-center">
            <div className="text-[20px] color-3 px-5">
                Check our social media to see what we've been working on
            </div>
        </div> */}
    </div>
  )
}

export default PortfolioPage