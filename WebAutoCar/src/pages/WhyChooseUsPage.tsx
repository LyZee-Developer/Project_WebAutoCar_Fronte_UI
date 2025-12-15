import BookAppointmentComponent from "../components/why_choose_us/BookAppointmentComponent"
import WhyChooseUsComponent from "../components/why_choose_us/WhyChooseUsComponent"

const WhyChooseUsPage = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] max-[900px]:flex flex-col w-full py-10 pt-20 gap-x-3 mt-10 max-w-[1500px] mx-auto">
        <BookAppointmentComponent/>
        <WhyChooseUsComponent/>
    </div>
  )
}

export default WhyChooseUsPage