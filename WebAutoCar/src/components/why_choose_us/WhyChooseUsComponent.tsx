import { useSelector } from 'react-redux';
import imgfix from '../../assets/image/fixcar.webp'
import type { RootState } from '../../store/store';
const WhyChooseUsComponent = () => {
  const tr = useSelector((state:RootState)=>state.system.language);
  return (
    <div className="w-full bg-red-400 relative h-auto  max-[900px]:h-[800px] rounded-3xl overflow-hidden ">
        <img src={imgfix} className='w-full absolute z-3 top-0 left-0 h-full object-cover' alt="" />
        <div className='absolute top-0 left-0 w-full h-full bg-[#0000009c] z-4'></div>
        <div className='absolute w-full top-1/2 left-1/2 z-8 -translate-y-1/2 -translate-x-1/2'>
          <div className='text-white w-full pl-5'>
            <div>{tr.why_choose_us}</div>
            <div className='text-[26px] font-bold leading-[40px]'>Get your rise back on track with our expert Car Repair Service</div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4'>
                    {[1,2,3,4].map(val=>(<div className={`flex flex-col gap-y-1 w-full pt-5 rounded-2xl text-white ${val}`}>
                        <div className='font-bold text-[20px] '>Service</div>
                        <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vero recusandae doloremque eveniet natus,</div>
                    </div>))}
                </div>
          </div>
        </div>  
    </div>
  )
}

export default WhyChooseUsComponent