import { FieldError, Input, Label, ListBox,Select, TextArea, TextField } from "@heroui/react"
import { getYearsToCurrent } from "../../utils/system_data"
import { useEffect, useState } from "react"
const BookAppointmentComponent = () => {
  const [Years,setYears] = useState<number[]>([]);
  useEffect(()=>{
    console.log("Call")
    setYears(getYearsToCurrent())
    console.log(getYearsToCurrent())
  },[])
  return (
   <div className='w-full p-5 flex flex-col gap-y-3'>
    <h1 className="color-4 text-[40px] font-bold">Booking Your Appointment Today!</h1>
    <div  className="color-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at iusto suscipit dolores reiciendis rem vitae molestiae et doloribus excepturi numquam quod doloremque dolorum deserunt minus vel, voluptates eos? Possimus?</div>
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      <TextField className="w-full" isInvalid={true} name="fullname" type="text">
          <Label>Full Name</Label>
          <Input placeholder="Ly leang seng" className="h-[50px]" />
          <FieldError>Full name is required!</FieldError>
      </TextField>
      <TextField className="w-full" name="email" type="email" >
          <Label>Email</Label>
          <Input placeholder="lyleangseng@gmail.com" className="h-[50px]" />
      </TextField>
      <TextField className="w-full " isInvalid={true} name="phone" type="text">
          <Label>Phone</Label>
          <Input placeholder="015 844 712" className="h-[50px]" />
          <FieldError>Phone number is required!</FieldError>
      </TextField>
      <TextField className="w-full " name="phone" type="text">
          <Label>Phone 2</Label>
          <Input placeholder="015 844 712" className="h-[50px]" />
      </TextField>
    
    </div>
    <div className="color-4 text-[25px] font-bold border-b-2 border-[#ffffff80] mt-4 border-dashed"></div>

    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      <Select className="w-full" placeholder="Select one">
      <Label>Car</Label>
      <Select.Trigger className="h-[50px]">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" textValue="Florida">
            Florida
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" textValue="Delaware">
            Delaware
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="california" textValue="California">
            California
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="texas" textValue="Texas">
            Texas
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="new-york" textValue="New York">
            New York
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="washington" textValue="Washington">
            Washington
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
    <Select className="w-full" placeholder="Select one">
      <Label>Service</Label>
      <Select.Trigger className="h-[50px]">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" textValue="Florida">
            Florida
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
    
    <Select className="w-full" placeholder="Select one">
      <Label>Year</Label>
      <Select.Trigger className="h-[50px]">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          {Years.map(val=>{
          return (
            <>
            
              <ListBox.Item id={`${val}`} textValue={`${val}`}>
                {val}
              </ListBox.Item>
            </>
          )
        })}
        </ListBox>
      </Select.Popover>
    </Select>
    
    </div>
    <div className="w-full">
       <Label>Problem</Label>
        <TextArea
        aria-label="Quick project update"
        className="w-full h-[100px]"
        placeholder="Enter your problem of car..."
      />
    </div>
  </div>
  )
}

export default BookAppointmentComponent