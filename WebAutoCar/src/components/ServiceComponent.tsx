// import { Button } from '@heroui/react'
import service from '../assets/image/maintenance.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { https } from '../utils/https'
import type { IServiceData, IServiceDetail } from '../interfaces/system'
const ServiceComponent = () => {
    const [data,setData] = useState<IServiceData>();
    const [listService,setListService] = useState<IServiceDetail[]>([]);
    const [isLoading,setIsLoading]=useState<boolean>(false);
    const getData = async () => {
        setIsLoading(true);
        const response = await https({
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
        if(response?.responseData?.data.length > 0 ){
            setIsLoading(false);
            var checkList = response?.responseData?.data?.filter((v:any)=>v.Type=="Service");
            if (checkList.length>0) setData(checkList[0])
        } 
    };
    const getListService = async () => {
        const response = await https({
            url:"http://localhost:8989/api/block_content_detail/list",
            data:{
                Id:0,
                Search:"",
                OrderBy:"Id",
                OrderDir:"desc",
                IsComplete:true,
                Page:1,
                Record:10,
                ContentBlockId:data?.Id
            },
            method:"post"
        });
        if(response?.responseData?.data.length > 0 ){
            setIsLoading(false);
            setListService(response?.responseData?.data)
            console.log(response?.responseData?.data)
        } 
    };
  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures it runs once on mount

  useEffect(() => {
    getListService();
  }, [data]); // Empty dependency array ensures it runs once on mount
  return (
    <div>
        <div className="w-full flex justify-center flex-col items-center gap-y-2  pb-10 px-[20px] pt-20">
            <h3 className="font-medium color-3">Our Service</h3>
            <h1 className="text-[30px] font-bold color-4">{data?.Title}</h1>
            <div className="max-w-[800px] text-center color-2"><p>{data?.Description}</p></div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-7 max-w-[1000px] mx-auto px-[20px]">
            {
                listService.length>0?(<>
                {
                    listService.map(val=>(
                    <div className={`bg-card  flex flex-col gap-y-4 w-full p-5 rounded-2xl ${val}`}>
                        <div className='w-[45px] h-[45px]'> <img className='w-full h-full' src={service} alt="" /></div>
                        <div>
                            <div className='font-bold text-[20px] color-4'>{val.Title}</div>
                            <div className='color-3'>{val?.Description}</div>
                        </div>
                    </div>))
                }
                </>):(<>
                    <div className={`bg-card flex justify-center items-center w-full p-5 rounded-2xl `}>
                            No data
                    </div>
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