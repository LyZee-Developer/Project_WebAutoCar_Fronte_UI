// import { Button } from '@heroui/react'
import service from '../assets/image/maintenance.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { https } from '../utils/https'
import { ui } from '../utils/GlobalHelper'
import { ShowSnackBar } from '../utils/system_data'
import service1 from '../assets/service/car-check.svg'
import website from '../assets/service/car-website.svg'
import save from '../assets/service/save-water.svg'
import screwdriver from '../assets/service/screwdriver.svg'
import wrench from '../assets/service/wrench.svg'
import accumulator from '../assets/service/accumulator.svg'
import type { IServiceData, IServiceDetail } from '../interfaces/service/service'
import { useDispatch } from 'react-redux'
import { setDataService } from '../store/system/SystemStore'

const ServiceComponent = () => {
    const [list,setList] = useState<IServiceData>();
    const [listService,setListService] = useState<IServiceDetail[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const dispatch = useDispatch();
    var imageService = [service1,website,save,screwdriver,wrench,accumulator];
    const getData = async () => {
        setIsLoading(true);
        const {data ,error} = await https({
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
            var checkList = data?.filter((v:any)=>v.Type=="Service");
            if (checkList.length>0) setList(checkList[0])
        } 
    };
    const getListService = async () => {
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
                ContentBlockId:list?.Id
            },
            method:"post"
        });
        if(data.length > 0 ){
            setIsLoading(false);
            setListService(data)
            dispatch(setDataService(data));
            console.log(data)
        }else {
            if(error!=undefined) ShowSnackBar(error)
        }
    };
  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures it runs once on mount

  useEffect(() => {
    getListService();
  }, [list]); // Empty dependency array ensures it runs once on mount
  return (
    <div>
        <div className="w-full flex justify-center flex-col items-center gap-y-2  pb-10 px-[20px] pt-20">
            {
                !isLoading?(<><h3 className="font-medium color-3">Our Service</h3>
            <h1 className="text-[30px] font-bold color-4">{list?.Title}</h1>
            <div className="max-w-[800px] text-center color-2"><p>{list?.Description}</p></div></>):(
            <div className='flex flex-col w-full justify-center items-center gap-y-3'>
                <div className={`w-[100px] h-[10px] ${ui.animation}`}></div>
                <div className={`max-w-[800px] w-full h-[30px] ${ui.animation}`}></div>
                <div className={`max-w-[800px] w-full h-[14px] ${ui.animation}`}></div>
                <div className={`max-w-[500px] w-full h-[14px] ${ui.animation}`}></div>
            </div>)
            }
        </div>
        <div className={`grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))]  gap-7 max-w-[1000px] mx-auto px-[20px]`}>
            {
                listService.length>0?(<>
                {
                    listService.map((val,index)=>(
                    <div className={`bg-card  flex flex-col gap-y-4 w-full p-5 rounded-2xl ${val}`}>
                        <div className='w-[45px] h-[45px]'> <img className='w-full h-full' src={imageService[index]} alt="" /></div>
                        <div>
                            <div className='font-bold text-[20px] color-4'>{val.Title}</div>
                            <div className='color-3'>{val?.Description}</div>
                        </div>
                    </div>))
                }
                </>):(<>
                   {
                     [1,2,3,4].map(val=><div className={`${ui.animation} ${val} h-[150px] flex flex-col gap-y-4 w-full p-5 rounded-2xl `}>
                    </div>)
                   }
                </>)
                
            }
        </div>
        <div className='text-center my-10 color-3 px-5'>We have more than 250+ satisfied customers with our service <span className='font-bold color-4'>Get Quote now</span></div>
        <div className='flex flex-col justify-center items-center mb-10'>
                <div className='text-[30px] font-bold color-4 px-10'><FontAwesomeIcon icon={faLocationDot} className='text-blue-400!' />Locateed in Cardiff, we are easily accessible to vehicle owners across the region</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis voluptatem quod unde saepe magni fugiat?</div>
                <div className='flex gap-x-3  mt-3'>
                    {/* <Button size='lg' className={"rounded-xl" } >Get free Quote today!</Button>
                    <Button size='lg' className={"rounded-xl" }>Contact Us</Button> */}
                </div>

        </div>
    </div>
  )
}

export default ServiceComponent