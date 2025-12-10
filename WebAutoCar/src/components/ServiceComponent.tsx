import service from '../assets/image/maintenance.svg'
const ServiceComponent = () => {
  return (
    <div>
        <div className="w-full flex justify-center flex-col items-center my-[50px]  px-[20px]">
            <h3 className="font-medium color-3">Our Service</h3>
            <h1 className="text-[34px] font-bold color-4">What service we're offering</h1>
            <div className="max-w-[800px] text-center color-2"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum in dignissimos veritatis? Ipsum suscipit dicta esse iure, laborum maxime. Suscipit ad pariatur facilis aspernatur ea harum voluptatum, quos sunt aliquid.</p></div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-3 max-w-[1000px] mx-auto px-[20px] mb-20">
            {[1,2,3,4,5,5].map(val=>(<div className=" bg-card  flex flex-col gap-y-4 w-full p-5 rounded-2xl">
                <div className='w-[45px] h-[45px]'> <img className='w-full h-full' src={service} alt="" /></div>
                <div>
                    <div className='font-bold text-[20px] color-4'>Service</div>
                    <div className='color-3'>assistance or advice given to customers during and after the sale of goods.</div>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default ServiceComponent