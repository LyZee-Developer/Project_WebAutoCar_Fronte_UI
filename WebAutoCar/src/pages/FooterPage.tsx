import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgfix from '../assets/logo/logor.png'
import map from '../assets/image/map.png'
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import telegram from '../assets/social/telegram.svg'
import youtube from '../assets/social/youtube.svg'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
const FooterPage = () => {
    var isDark = useSelector((state:RootState)=>state.system.isDark);
    const onClickOnMap=()=>{
        console.log("click")
        window.open("https://www.google.com/maps?ll=11.553453,104.821334&z=18&t=m&hl=en&gl=KH&mapclient=embed&cid=14629073525661475694")
    }
  return (
    <div className={`w-full bg-black p-5 ${!isDark?"constrast":""}`}>
        <div className="grid w-full h-full max-[540px]:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-[1300px]:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
            <div className={`w-full h-full flex flex-col gap-y-10   `}>
                <div className='w-[160px]'><img src={imgfix} alt="" /></div>
                <div className='color-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro atque inventore amet totam dolore ipsam aliquam, dolorum ratione ipsa numquam architecto itaque voluptate, est facere deserunt repellat a voluptates. Temporibus.
                </div>
                <div className='flex gap-x-4'>
                    {
                        [facebook,instagram,telegram,youtube].map(val=><><div className='w-[40px] h-[40px] rounded-full'>
                        <img src={val} alt="" className='w-full h-full object-contain' />
                    </div></>)
                    }
                </div>
            </div>
            <div className={`w-full h-full   flex flex-col gap-y-4 `}>
                <div className='color-2'>Our Service</div>
                <div className='flex flex-col gap-y-3 font-bold text-[18px]'>
                    <div className='color-3'>Service</div>
                    <div className='color-3'>Repairs</div>
                    <div className='color-3'>Diagnostics</div>
                    <div className='color-3'>Tuning & Performance Upgrade</div>
                    <div className='color-3'>ECU/TCU Remapping</div>
                    <div className='color-3'>Genuine Parts Replacemen</div>
                </div>
            </div>
            <div className={`w-full h-full   flex flex-col gap-y-4 `}>
                <div className='color-2'>Contact Us</div>
                <div className='flex gap-y-3 flex-col '>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div>
                            <div className='text-[13px] color-2'>Working hours:</div>
                            <div className='text-[18px] color-4'>Mon - Fri (9:00AM-5:00PM)</div>
                        </div>
                    </div>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div >
                            <div className='text-[13px] color-2'>Phone:</div>
                            <div className='text-[18px] color-4'>015 844 712 / 023 444 555</div>
                        </div>
                    </div>
                    <div className='flex gap-x-3 color-3 '>
                        <div>
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div >
                            <div className='text-[13px] color-2'>Email:</div>
                            <div className='text-[18px] color-4'>lyleangheng@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full color-4 group relative cursor-pointer" onClick={()=>onClickOnMap()} >
                <img src={map} alt="" />
                <div className='w-full h-full transition-all ease-in-out group-hover:opacity-100 opacity-0 bg-[#00000067]  absolute top-0 left-0'></div>
                <div className='absolute left-1/2 top-1/2 -translate-y-1/2 group-hover:opacity-100! opacity-0 -translate-x-1/2 text-white'>Click to preview location</div>
            </div>
           
        </div>
    </div>
  )
}

export default FooterPage