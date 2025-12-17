import { useDispatch, useSelector } from 'react-redux'
import imgfix from '../assets/service/prop.jpg'
import type { RootState } from '../store/store'
import logor from '../assets/logo/logor.png'
import { useEffect, useState } from 'react'
import { ShowSnackBar } from '../utils/system_data'
import { https } from '../utils/https'
import type { IServiceData, IServiceDetail } from '../interfaces/service/service'
import type { PartnerSupport } from '../interfaces/partner/partner'
import { ui } from '../utils/GlobalHelper'
const AboutUSComponent = () => {
    var isDark = useSelector((state:RootState)=>state.system.isDark);
    const [listPartner,setListPartner] = useState<PartnerSupport[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const getData = async () => {
        setIsLoading(true);
        const {data ,error} = await https({
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
            console.log(data)
            setListPartner(data)
        }
    };
    // const getlistPartner = async () => {
    //     const {data,error} = await https({
    //         url:"http://localhost:8989/api/block_content_detail/list",
    //         data:{
    //             Id:0,
    //             Search:"",
    //             OrderBy:"Id",
    //             OrderDir:"desc",
    //             IsComplete:true,
    //             Page:1,
    //             Record:10,
    //             ContentBlockId:list?.Id
    //         },
    //         method:"post"
    //     });
    //     if(data.length > 0 ){
    //         setIsLoading(false);
    //         setListPartner(data)
    //         dispatch(setDataService(data));
    //         console.log(data)
    //     }else {
    //         if(error!=undefined) ShowSnackBar(error)
    //     }
    // };
  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures it runs once on mount

  useEffect(() => {
    // getlistPartner();
  }, [listPartner]); // Empty dependency array ensures it runs once on mount
  return (
    <div className={`mt-5 pt-20 w-full  ${!isDark?"bg-black constrast":""}   rounded-3xl  p-10   max-w-[1500px] mx-auto `}>
        <div className="max-[900px]:flex flex-col max-[600px]:p-0 p-10 grid flex-wrap items-start grid-cols-[1fr_1fr]">
            <div className='w-full h-full'>
                <img className='w-full h-full object-cover rounded-2xl' src={imgfix} alt="" />
            </div>
            <div className='pl-10 max-[900px]:pl-0'>
                <div>
                    <div className='color-3'>About us</div>
                    <div className='text-[30px] color-4 font-bold'>Why choose SV Performnce</div>
                    <div className='color-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea excepturi nisi repellat inventore magnam odit tempora! Molestiae maxime dolor recusandae eum, sunt voluptas odit vel aspernatur, quis similique nemo!</div>
                </div>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
                    {[1,2,3,4].map(val=>(<div className={`flex flex-col gap-y-4 w-full pt-5 rounded-2xl  ${val}`}>
                        <div className='font-bold text-[20px] color-4'>Service</div>
                        <div className='color-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero recusandae doloremque eveniet natus, ipsam adipisci in est id illum illo laudantium aut nulla, reprehenderit possimus aperiam nam voluptatem dicta?</div>
                    </div>))}
                </div>
            </div>
        </div>
        <div className='w-full px-10 '>
            <div className='w-full h-[2px] mt-10 relative'>
                <div className='w-full h-full bg-[#ffffff36]'></div>
                <div className='text-white w-[250px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black px-4'>Our Partner & Support</div>
            </div>
            <div className='flex mt-10 gap-x-8 mb-8'>
                <div className="carousel w-full!">
                    <div className="carousel-track">
                        {
                            !isLoading?(<>{
                                listPartner.map(val=>(<div className={`flex items-center ${val.Id}`}>
                                                                    <img src={val.PathImage} alt="" />

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