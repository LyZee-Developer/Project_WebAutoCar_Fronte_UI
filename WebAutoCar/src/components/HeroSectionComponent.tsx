import background from '../assets/image/background.jpg'
import bwm from '../assets/image/BMW.svg.png'
const HeroSectionComponent=()=> {
    var shape_style = "w-[100px] h-[100px] bg-[#ffffff1c] rounded-xl flex justify-center items-center";
  return (
    <div className="w-full h-[500px] bg-black hero relative">
        <img src={background} alt="" className='w-full object-contain  h-full'/>
        <div className='absolute bottom-10 right-10 flex gap-x-4'>
            {
                [1,2,3,4].map(val=>(
                <>
                    <div className={shape_style}>
                        <img src={bwm} className='w-[60px] h-[60px]' alt="" />
                    </div>
                </>))
            }
        </div>
    </div>
  )
}

export default HeroSectionComponent