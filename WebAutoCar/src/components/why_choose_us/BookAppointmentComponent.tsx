import { Button, Description, FieldError, Input, Label, ListBox, Spinner, TextArea, TextField, type Key } from "@heroui/react"
import {Select} from "@heroui/react";
import { getYearsToCurrent, ShowSnackBar } from "../../utils/system_data"
import { useEffect, useState, type ChangeEvent } from "react"
import noted from '../../assets/system/note.svg'
import type { RootState } from "../../store/store";
import {  useSelector } from "react-redux";
import type {  Car, Service } from "../../interfaces/booking_appointment/data";
import { https } from "../../utils/https";
import { isEmptyData, translate } from "../../utils/GlobalHelper";
const BookAppointmentComponent = () => {
  const tr = useSelector((state:RootState)=>state.system.language);
  const isDark = useSelector((state:RootState)=>state.system.isDark);
  const [YearsId,setYearsId] = useState<Key | null>();
  const [car,setCar] = useState<Car[]>([]);
  const [YearsProduct,setYearsProduct] = useState<number[]>([]);
  const [service,setService] = useState<Service[]>([]);
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const [isPending,setPending]=useState<boolean>(false);
  const [fullName,setFullName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [phone,setPhone] = useState<string>("");
  const [carId,setCarId] = useState<Key | null>();
  const [serviceIds,setServiceIds] = useState<Key[]>();
  const [phone1,setPhone1] = useState<string>("");
  const [problem,setProblem] = useState<string>("");
  const [firstLogin,setFirstLogin] = useState({
    phone:false,
    phone1:false,
    name:false,
    problem:false,
  });
  const getData = async (type:string) => {
      var url = "http://localhost:8989/api/car/list"
      if (type=="service") url = "http://localhost:8989/api/service_type/list"
        const {data,error} = await https({
            url:url,
            data:{
                Id:0,
                Search:"",
                OrderBy:"Id",
                OrderDir:"asc",
                Status:true,
                Page:1,
                Record:0
            },
            method:"post"
        });
        if(data.length > 0 ){
          if(type=="service") setService(data)
          else setCar(data)
          setIsLoading(false);
        }else {
            if(error!=undefined) ShowSnackBar(error)
        }
    };
  useEffect(() => {
    getData("service");
    getData("car");
  }, []);
   const OnSubmit=()=>{
    setPending(true)
    console.log({
      fullName:fullName,
      email:email,
      phone:phone,
      phone1:phone1,
      carId:carId,
      serviceIds:serviceIds,
      problem:problem,
      YearsId:YearsId,
    })
    var isValid:boolean[] = [];
    if(isEmptyData(phone)) {
      setFirstLogin(ev=>({...ev,phone:true}))
      isValid.push(true)
    }
    if(isEmptyData(fullName)){
       setFirstLogin(ev=>({...ev,name:true}))
       isValid.push(true)
    }
    if(isEmptyData(problem)){
       setFirstLogin(ev=>({...ev,problem:true}))
       isValid.push(true)
    }
    if(isValid.some(v=>v==true)){
      ShowSnackBar("Your information is invalid!","error")
      setPending(false)
      return ;
    }
    setTimeout(() => {
      setProblem("")
      setFullName("")
      setPhone1("")
      setPhone("")
      setProblem("")
      setEmail("")
      setCarId(0)
      setYearsId(0)
      setServiceIds([])
      ShowSnackBar("Submit information completely 🎉")
      setPending(false)
    }, 1000);
  }
  const hoverSelect=` ${isDark?"hover:bg-[#303030] hover:text-white":"hover:bg-[#f0f0f0] hover:text-black"}`;
  
  const EventChnageInput=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    console.log(e.target.name)
    var prop = e.target.name;
    var value = e.target.value;
    if(prop=="phone1") {

      setFirstLogin(ev=>({...ev,phone1:value.length!=0}))
      setPhone1(value)
    }
    if(prop=="phone") {
      setFirstLogin(ev=>({...ev,phone:value.length!=0}))
      setPhone(value)
    }
    if(prop=="problem") {
      setFirstLogin(ev=>({...ev,problem:value.length!=0}))
      setProblem(value)
    }
    
  }
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{2,3}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/; 
  const isValidPhone = (phone: string) => phoneRegex.test(phone);
  useEffect(()=>{
    setYearsProduct(getYearsToCurrent())
  },[])
  return (
   <div className='w-full p-5 max-[430px]:px-2 pt-0 flex flex-col gap-y-3'>
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
      <TextField isRequired  className="w-full"  isInvalid={fullName.length==0 && firstLogin.name} name="fullname" type="text" onChange={setFullName}>
          <Label>{tr.full_name}</Label>
          <Input placeholder="Ly leang seng" className="h-[50px] bg-card"  value={fullName}/>
          <FieldError>{tr.full_name_is_required}</FieldError>
      </TextField>
      <TextField className="w-full" name="email" type="email" onChange={setEmail}>
          <Label>{tr.email}</Label>
          <Input placeholder="lyleangseng@gmail.com" className="h-[50px] bg-card" value={email}/>
      </TextField>
      <TextField isRequired className="w-full " isInvalid={(!isValidPhone(phone) && firstLogin.phone)} name="phone" >
          <Label>{tr.phone}</Label>
          <Input placeholder="015 844 712" type="text" className="h-[50px] bg-card" value={phone} onChange={EventChnageInput}/>
           <FieldError>{tr.make_sure_you_phone_number_is_correctly}</FieldError>
      </TextField>
      <TextField className="w-full " name="phone1" type="text" isInvalid={!isValidPhone(phone) && firstLogin.phone1} >
          <Label>{tr.phone}</Label>
          <Input placeholder="015 844 712" type="text" className="h-[50px] bg-card" value={phone1} onChange={EventChnageInput}/>
            <FieldError>{tr.make_sure_you_phone_number_is_correctly}</FieldError>
      </TextField>
    </div>
    <div className="color-4 text-[25px] font-bold border-b-2 border-[#ffffff80] mt-4 border-dashed"></div>
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      <Select  
      isRequired 
      className="w-full" 
      placeholder={tr.please_select}
      value={carId}
      onChange={(value) => setCarId(value)}  
      >
      <Label>{tr.car}</Label>
      <Select.Trigger className="h-[50px] bg-card" >
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox className={`${isDark? " bg-[#424242] text-white":""}`}>
          {
             car.length>0 && !isLoading?(<>
              {
                car.map((val)=>{
                  return (
                    <>
                        <ListBox.Item id={val.Id} textValue={translate(val.Name,val.EnglishName)} className={hoverSelect}>
                            {translate(val.Name,val.EnglishName)}
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </>
                  )
                })
              }
             </>):(<></>)
          }
        </ListBox>
      </Select.Popover>
    </Select>
   

    <Select 
     selectionMode="multiple" 
      isRequired className="w-full"
      placeholder={tr.please_select}
      value={serviceIds}
      onChange={(keys) => setServiceIds(keys as Key[])}
    >
      <Label>{tr.service}</Label>
      <Select.Trigger className="h-[50px] bg-card">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
           <ListBox className={`${isDark? " bg-[#424242] text-white":""}`}>
        {
             service.length>0 && !isLoading?(<>
              {
                service.map((val)=>{
                  return (
                    <>
                        <ListBox.Item id={val.Id} textValue={translate(val.Name,val.EnglishName)} className={hoverSelect} >
                            {translate(val.Name,val.EnglishName)}
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </>
                  )
                })
              }
             </>):(<></>)
          }
             </ListBox>
      </Select.Popover>
    </Select>
    
    <Select 
    className="w-full" 
    placeholder={tr.please_select}
    value={YearsId}
    onChange={(value) => setYearsId(value)}  
    
    >
      <Label>{tr.year}</Label>
      <Select.Trigger className="h-[50px] bg-card">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox className={`${isDark? " bg-[#424242] text-white":""}`}> 
          {YearsProduct.map(val=>{
          return (
            <>
            
              <ListBox.Item id={`${val}`} textValue={`${val}`} className={hoverSelect}>
                {val}
              </ListBox.Item>
            </>
          )
        })}
        </ListBox>
      </Select.Popover>
        <Description>{tr.select_year_of_car}</Description>
    </Select>
    
    </div>
    <div className="w-full">
           
      <TextField className="w-full "  isRequired name="problem" type="text" isInvalid={problem.length==0 && firstLogin.problem} >
          <Label>{tr.problem}</Label>
         <TextArea  required={true}
            value={problem}
            onChange={EventChnageInput}
            aria-label="Quick project update"
            className="w-full h-[100px] bg-card"
            placeholder="Enter your problem of car..."
          />
          <FieldError>{tr.please_tell_me_about_your_problem_of_car}</FieldError>
      </TextField>
     
    </div>
    <div><Button className={`w-full h-[50px] rounded-xl text-[17px] ${isPending?"pointer-events-none":""}`} onClick={OnSubmit}>
        <>
          {isPending ? (<>
          <Spinner color="current" size="sm" />
          {tr.sending}...
          </>) : tr.submit}
        </>
      </Button>
    </div>
  </div>
  )
}

export default BookAppointmentComponent