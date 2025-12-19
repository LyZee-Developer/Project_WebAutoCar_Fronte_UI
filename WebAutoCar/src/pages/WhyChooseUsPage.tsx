import BookAppointmentComponent from "../components/why_choose_us/BookAppointmentComponent"
import WhyChooseUsComponent from "../components/why_choose_us/WhyChooseUsComponent"

const WhyChooseUsPage = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] max-[1600px]:px-30 max-[1600px]:py-2 max-[430px]:p-2 max-[1300px]:p-2 max-[830px]:p-2 max-[1300px]:mt-2 max-[830px]:mt-2 max-[780px]:p-2 max-[430px]:mt-2 max-[780px]:mt-2 max-[900px]:flex flex-col w-full py-10 pt-20 gap-x-3 mt-10 max-w-[1500px] mx-auto">
        <BookAppointmentComponent/>
        <WhyChooseUsComponent/>
    </div>
  )
}

export default WhyChooseUsPage