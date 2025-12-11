import { Button } from '@heroui/react'
import service from '../assets/image/maintenance.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const ServiceComponent = () => {
  return (
    <div>
        <div className="w-full flex justify-center flex-col items-center my-[50px]  px-[20px]">
            <h3 className="font-medium color-3">Our Service</h3>
            <h1 className="text-[34px] font-bold color-4">What service we're offering</h1>
            <div className="max-w-[800px] text-center color-2"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum in dignissimos veritatis? Ipsum suscipit dicta esse iure, laborum maxime. Suscipit ad pariatur facilis aspernatur ea harum voluptatum, quos sunt aliquid.</p></div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-7 max-w-[1000px] mx-auto px-[20px]">
            {[1,2,3,4,5,5].map(val=>(<div className=" bg-card  flex flex-col gap-y-4 w-full p-5 rounded-2xl">
                <div className='w-[45px] h-[45px]'> <img className='w-full h-full' src={service} alt="" /></div>
                <div>
                    <div className='font-bold text-[20px] color-4'>Service</div>
                    <div className='color-3'>assistance or advice given to customers during and after the sale of goods.</div>
                </div>
            </div>))}
        </div>
        <div className='text-center my-10 color-3 px-5'>We have more than 250+ satisfied customers with our service <span className='font-bold color-4'>Get Quote now</span></div>
        <div className='flex flex-col justify-center items-center mb-10'>
                <div className='text-[30px] font-bold color-4 px-10'><FontAwesomeIcon icon={faLocationDot} className='text-blue-400!' />Locateed in Cardiff, we are easily accessible to vehicle owners across the region</div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis voluptatem quod unde saepe magni fugiat?</div>
                <div className='flex gap-x-3  mt-3'>
                    <Button size='lg' className={"rounded-xl" } >Get free Quote today!</Button>
                    <Button size='lg' className={"rounded-xl" }>Contact Us</Button>
                </div>

        </div>
    </div>
  )
}

export default ServiceComponent