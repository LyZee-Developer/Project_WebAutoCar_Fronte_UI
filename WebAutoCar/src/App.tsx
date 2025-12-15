import { useSelector } from 'react-redux';
import HeaderSectionComponent from './components/HeaderSectionComponent'
import './styles/tailwind.css'
import './styles/system_style.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { RootState } from './store/store';
import { useEffect } from 'react';
import HeroSectionComponent from './components/HeroSectionComponent';
import ServiceComponent from './components/ServiceComponent';
import AboutUSComponent from './components/AboutUSComponent';
import SlideMenuComponent from './components/SlideMenuComponent';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import FooterPage from './pages/FooterPage';
function App() {
  const isDark = useSelector((state:RootState)=>state.system.isDark);
  useEffect(()=>{
    if(isDark) document.body.classList.add(`dark`);
    else document.body.classList.remove(`dark`);
  },[isDark])
  return (
    <>
      <div >
        <SlideMenuComponent/>
        <HeaderSectionComponent/>
        <HeroSectionComponent/>
        <ServiceComponent/>
        <AboutUSComponent/>
        <WhyChooseUsPage/>
        <FooterPage/>
      </div>
    </>
  )
}

export default App
