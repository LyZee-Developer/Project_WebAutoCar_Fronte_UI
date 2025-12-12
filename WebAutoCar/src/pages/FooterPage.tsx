import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import imgfix from '../assets/logo/HengeAuto_logo_2_ecbbd5df-ddc1-401a-bab7-050678068128.webp'
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import telegram from '../assets/social/telegram.svg'
import youtube from '../assets/social/youtube.svg'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
const FooterPage = () => {
    var isDark = useSelector((state:RootState)=>state.system.isDark);
  return (
    <div className={`w-full bg-black p-5 ${!isDark?"constrast":""}`}>
        <div className="grid w-full h-full  grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
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
            <div className="w-full h-full "></div>
        </div>
    </div>
  )
}

export default FooterPage