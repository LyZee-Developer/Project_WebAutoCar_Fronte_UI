import { useSelector } from 'react-redux';
import HeaderSectionComponent from './components/HeaderSectionComponent'
import type { Person } from './interfaces/person'
import './styles/tailwind.css'
import './styles/system_style.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { RootState } from './store/store';
import { useEffect } from 'react';
import HeroSectionComponent from './components/HeroSectionComponent';
import TextMidLineComponent from './components/TextMidLineComponent';
import ServiceComponent from './components/ServiceComponent';
function App() {
  const per :Person = {
    age:20,
    email:"lylangseng@gamil.com",
    name:"Lyleangseng",
    phone:"015844172"
  }
  const isDark = useSelector((state:RootState)=>state.theme.isDark);
  useEffect(()=>{
    if(isDark) document.body.classList.add(`dark`);
    else document.body.classList.remove(`dark`);
  },[isDark])
  return (
    <>
      <div >
        <HeaderSectionComponent/>
        <HeroSectionComponent/>
        <ServiceComponent/>
      </div>
    </>
  )
}

export default App
