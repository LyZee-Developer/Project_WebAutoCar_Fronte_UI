import { Button, Description, FieldError, Input, Label, ListBox,Select, TextArea, TextField } from "@heroui/react"
import { getYearsToCurrent, ShowSnackBar } from "../../utils/system_data"
import { useEffect, useState } from "react"
import noted from '../../assets/system/note.svg'
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
const BookAppointmentComponent = () => {
  const tr = useSelector((state:RootState)=>state.system.language);
  const [Years,setYears] = useState<number[]>([]);
  const OnSubmit=()=>{
    ShowSnackBar("Submit information completely 🎉")
  }
  useEffect(()=>{
    setYears(getYearsToCurrent())
  },[])
  return (
   <div className='w-full p-5 pt-0 flex flex-col gap-y-3'>
    <div className="flex gap-x-2 items-center">
      <div className="w-[40px] h-[40px] ">
          <img src={noted} className="w-ful h-full" alt="" />
      </div>
      <h1 className="color-4 text-[30px] max-[400px]:text-[22px] font-medium">
        {tr.booking_your_appointment}
      </h1>
    </div>
    <div  className="color-3">{tr.please_describe_the_problem_with_your_car_once_we_receive_your_information_we_will_contact_you_shortly}</div>
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      <TextField isRequired className="w-full" isInvalid={false} name="fullname" type="text">
          <Label>{tr.full_name}</Label>
          <Input placeholder="Ly leang seng" className="h-[50px]" />
          <FieldError>Full name is required!</FieldError>
      </TextField>
      <TextField className="w-full" name="email" type="email" >
          <Label>{tr.email}</Label>
          <Input placeholder="lyleangseng@gmail.com" className="h-[50px]" />
      </TextField>
      <TextField isRequired className="w-full " isInvalid={false} name="phone" type="text">
          <Label>{tr.phone}</Label>
          <Input placeholder="015 844 712" className="h-[50px]" />
          <FieldError>Phone number is required!</FieldError>
      </TextField>
      <TextField className="w-full " name="phone" type="text">
          <Label>{tr.phone}</Label>
          <Input placeholder="015 844 712" className="h-[50px]" />
      </TextField>
    
    </div>
    <div className="color-4 text-[25px] font-bold border-b-2 border-[#ffffff80] mt-4 border-dashed"></div>

    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      <Select  selectionMode="multiple"  isRequired className="w-full" placeholder={tr.please_select}>
      <Label>{tr.car}</Label>
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
    <Select  selectionMode="multiple" isRequired className="w-full" placeholder={tr.please_select}>
      <Label>{tr.service}</Label>
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
    
    <Select className="w-full" placeholder={tr.please_select}>
      <Label>{tr.year}</Label>
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
        <Description>Select year of car</Description>
    </Select>
    
    </div>
    <div className="w-full">
       <Label >{tr.problem}</Label>
        <TextArea  required={true}
        aria-label="Quick project update"
        className="w-full h-[100px]"
        placeholder="Enter your problem of car..."
      />
     
    </div>
    <div><Button className="w-full h-[50px] rounded-xl text-[17px]" onClick={OnSubmit}>{tr.submit}</Button></div>
  </div>
  )
}

export default BookAppointmentComponent