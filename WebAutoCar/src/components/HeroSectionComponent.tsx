import background from '../assets/image/background.jpg'
import bwm from '../assets/image/BMW.svg.png'
import rr from '../assets/image/Rolls-Royce-Logo.jpg'
import lam from '../assets/image/lamb.png'
import fer from '../assets/image/ferrari-logo-png_seeklogo-512505.png'
import mas from '../assets/image/mazda-logo-png_seeklogo-89733.png'
import { Button } from "@heroui/react";
const HeroSectionComponent=()=> {
    var shape_style = "w-[100px] h-[100px] bg-[#ffffff1c] rounded-xl flex justify-center items-center";
    var transition = "transition-all duration-100 ease-in"
  return (
    <div className="w-full h-[500px]  bg-black hero relative">
        <img src={background} alt="" className='w-full object-contain  h-full'/>
        <div className={`absolute max-[960px]:left-[40px] max-[960px]:top-[10%] top-[20%] left-[80px] ${transition} gap-y-4 flex  flex-col`}> 
            <div className='max-w-[500px] flex flex-col gap-y-5 '>
                <div className='text-[#ffffff96]'>ផ្តល់ជូននូវ​ គុណភាព នឹងទុកចិត្តទ្វេដង</div>
                <div className='text-5xl font-medium text-white max-[590px]:text-[25px]'>Heng Auto Machine</div>
                <div className='leading-[25px] text-[#ffffff96]'>New products and model lines were introduced to the brand's portfolio and brought to the market and saw an increased productivity for the brand. In the late 2000s, during the Great Recession, Lamborghini's sales dropped nearly 50%.</div>
            </div>
            <div className='flex gap-x-3'>  
                <Button size="lg" className={"rounded-lg  bg-white text-black"}>
                    Contact Now
                </Button>

                <Button size='lg' className={"rounded-lg border-white border-1! bg-[#000000]"}>Lean More</Button>
            </div>
        </div>
        <div className='absolute bottom-10 max-[390px]:right-[65px] max-[325px]:right-[35px] overflow-hidden right-10 flex gap-x-4'>
            {
                [lam,rr,bwm,fer,mas].map((val,index)=>(
                <>
                    <div className={`${shape_style} ${transition} max-[650px]:w-[70px]  max-[650px]:h-[70px] ${index==0?` max-[490px]:hidden `:``} ${index==1?` max-[390px]:hidden `:``}`}>
                        <img src={`${val}`} className='max-[650px]:w-[40px] max-[650px]:h-[40px] object-contain cursor-pointer w-[60px] hover:rotate-360 transition-all max-[650px]:duration-200 duration-700 ease-in h-[60px]' alt="" />
                    </div>
                </>))
            }
        </div>
    </div>
  )
}

export default HeroSectionComponent