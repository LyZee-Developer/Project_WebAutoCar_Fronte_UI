import { useSelector } from 'react-redux';
import HeaderSectionComponent from './components/HeaderSectionComponent'
import './styles/tailwind.css'
import './styles/system_style.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { RootState } from './store/store';
import { useEffect, useRef } from 'react';
import HeroSectionComponent from './components/HeroSectionComponent';
import ServiceComponent from './components/ServiceComponent';
import AboutUSComponent from './components/AboutUSComponent';
import SlideMenuComponent from './components/SlideMenuComponent';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import FooterPage from './pages/FooterPage';
function App() {
  const isDark = useSelector((state:RootState)=>state.system.isDark);
  const headerType = useSelector((state:RootState)=>state.system.headerType);
  const refservice = useRef<HTMLDivElement | null>(null);
  const reffooter = useRef<HTMLDivElement | null>(null);
  const refheader = useRef<HTMLDivElement | null>(null);
  const refwhychoose = useRef<HTMLDivElement | null>(null);
  const refaboutus = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if(isDark) document.body.classList.add(`dark`);
    else document.body.classList.remove(`dark`);
  },[isDark])
  useEffect(()=>{
   if(headerType=="home"){
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
   else if(headerType=="our_work" || headerType=="contact_us"){
     refwhychoose?.current?.scrollIntoView({ 
      behavior: 'smooth', // Optional: smooth animation
      block: 'start'      // Optional: align the top of the element to the top of the viewport
    });
   }
  },[headerType])

  return (
    <>
      <div >
        <div><SlideMenuComponent /></div>
        <div><HeaderSectionComponent/></div>
        <div ref={refheader}><HeroSectionComponent/></div>
        <div ref={refservice}><ServiceComponent/></div>
        <div ref={refaboutus}><AboutUSComponent/></div>
        <div ref={refwhychoose}><WhyChooseUsPage/></div>
        <div ref={reffooter}><FooterPage/></div>
      </div>
    </>
  )
}

export default App
