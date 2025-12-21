import { useDispatch, useSelector } from 'react-redux';
import HeaderSectionComponent from './components/HeaderSectionComponent'
import './styles/tailwind.css'
import './styles/system_style.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/modify_style.scss'
import type { RootState } from './store/store';
import { useEffect, useRef, useState } from 'react';
import HeroSectionComponent from './components/HeroSectionComponent';
import ServiceComponent from './components/ServiceComponent';
import AboutUSComponent from './components/AboutUSComponent';
import SlideMenuComponent from './components/SlideMenuComponent';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import FooterPage from './pages/FooterPage';
import PortfolioPage from './pages/PortfolioPage';
import { SelectHeaderAction, setCountry, setLanguage } from './store/system/SystemStore';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const isDark = useSelector((state:RootState)=>state.system.isDark);
  const headerType = useSelector((state:RootState)=>state.system.headerType);
  const refservice = useRef<HTMLDivElement | null>(null);
  const [IsShowScrollUp,setIsShowScrollUp] = useState<boolean>(false);
  const reffooter = useRef<HTMLDivElement | null>(null);
  const refheader = useRef<HTMLDivElement | null>(null);
  const refwhychoose = useRef<HTMLDivElement | null>(null);
  const portfolio = useRef<HTMLDivElement | null>(null);
  const refaboutus = useRef<HTMLDivElement | null>(null);
  const country = useSelector((state:RootState)=>state.system.country);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setLanguage(country.code))
    if(country.code=="cam") document.body.classList.add(`kh`);
    else document.body.classList.remove(`en`);
  },[country])
  useEffect(()=>{
    if(isDark) document.body.classList.add(`dark`);
    else document.body.classList.remove(`dark`);
  },[isDark])
  useEffect(()=>{
    var lang = localStorage.getItem("lang");
    if(lang==null || lang =="") return ;
    dispatch(setCountry(JSON.parse(lang)))
  },[])
  const ScrollUp=()=>{
    var select  = "home";
    if(headerType=="home")  select = "home-fix"
    dispatch(SelectHeaderAction(select))
  }
  useEffect(()=>{
   if(headerType=="home" || headerType=="home-fix" ){
    refheader?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
   else if(headerType=="our_service"){
     refservice?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
   else if(headerType=="about_us"){
     refaboutus?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
   else if(headerType=="portfolio"){
     portfolio?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
   else if(headerType=="booking_appointment"){
     refwhychoose?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
   else if(headerType=="footer" || headerType=="footer-btn" || headerType=="contact_us" ){
     reffooter?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
  },[headerType])
   const handleScroll=()=>{
    setIsShowScrollUp(window.scrollY>1000);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className='relative'>
        <div><SlideMenuComponent /></div>
        <div><HeaderSectionComponent /></div>
        <div ref={refheader}><HeroSectionComponent /></div>
        <div ref={refservice}><ServiceComponent /></div>
        <div ref={refaboutus}><AboutUSComponent /></div>
        <div ref={refwhychoose}><WhyChooseUsPage /></div>
        <div ref={portfolio}><PortfolioPage /></div>
        <div ref={reffooter}><FooterPage /></div>
        {
          IsShowScrollUp?(<>
            <div className={`w-[50px] bg-red-400 text-white h-[50px]  cursor-pointer animate-ping flex justify-center items-center  right-[5%] rounded-full fixed bottom-10  z-100`} onClick={()=>ScrollUp()}>
            <FontAwesomeIcon icon={faCircleUp} />
          </div>
          </>):(<></>) 
        }
        
      </div>
    </>
  )
}

export default App
