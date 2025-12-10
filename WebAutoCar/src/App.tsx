import { useSelector } from 'react-redux';
import HeaderSectionComponent from './components/HeaderSectionComponent'
import type { Person } from './interfaces/person'
import './styles/tailwind.css'
import './styles/system_style.scss';
import type { RootState } from './store/store';
import { useEffect } from 'react';
import HeroSectionComponent from './components/HeroSectionComponent';
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
      </div>
    </>
  )
}

export default App
