import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logor from '../assets/logo/logor.png'
import { faBarsStaggered, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { changeTheme, SelectHeaderAction, setCountry, setIsShowNavLeftMenu } from '../store/system/SystemStore'
import '../styles/component/HeroSection.scss'
import { useEffect, useState } from 'react'
import { country, data_header, getLanguage } from '../utils/system_data'
import { ui } from '../utils/GlobalHelper'
import type { Country } from '../interfaces/country/country'
const HeaderSectionComponent=()=> {
  const isDark = useSelector((state:RootState)=>state.system.isDark);
  const [isFixHeader,setIsFixHeader] = useState<boolean>(true);
  const [isShowModalLG,setIsShowModalLG] = useState<boolean>(false);
  const [headerClick,SetHeaderClick] = useState<string>("");
  const isShowNavLeftMenu = useSelector((state:RootState)=>state.system.isShowNavLeftMenu);
  const tr = useSelector((state:RootState)=>state.system.language);
  const language = useSelector((state:RootState)=>state.system.country);
  const dispatch = useDispatch();
  const onClickChangeThem=()=>{
    dispatch(changeTheme(!isDark))
  }
  const onClickNavLeftMenu=()=>{
    dispatch(setIsShowNavLeftMenu(!isShowNavLeftMenu))
  }
  const handleScroll=(e:any)=>{
    console.log(e)
    console.log("window.scrollY",window.scrollY)
  }
  useEffect(() => {
    // Add the event listener to the window
    window.addEventListener('scroll', handleScroll);
    setIsFixHeader(true);
    // Clean up the event listener on component unmount to prevent memory leaks
    console.log("==>",getLanguage("cam").home)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isShowModalLanguage=(isShow:boolean)=>{
      setIsShowModalLG(!isShow);
  }
  const onSelectHeader=(select:string)=>{
    SetHeaderClick(select);
    dispatch(SelectHeaderAction(select))
  }
  const selectLanguage=(langauge:Country)=>{
    localStorage.setItem("lang",JSON.stringify(langauge));
    dispatch(setCountry(langauge))
     setIsShowModalLG(!isShowModalLG);
  }
  var style="cursor-pointer text-[13px]  hover:opacity-100 transition-all ease-in-out";
  return (
    <>
        <div className={`flex bg-black justify-between items-center px-2 ${isFixHeader?"fixed z-200 w-full left-0 top-0":""}`}> 
            <div className='w-[130px]'>
                <img src={logor} className='w-full h-full ' alt="" />
            </div>
            <div className='flex items-center gap-x-6 text-white'>{
                data_header.map(val=><div className={`${style} ${val.code=="contact_us"?"hidden":""} ${headerClick=="home"?"opacity-100":"opacity-70"} max-[640px]:hidden`} onClick={()=>{onSelectHeader(val.code)}}>
                  {tr[val.code]}
                </div>)
              }
                
                <div className='sm:hidden' onClick={()=>onClickNavLeftMenu()}><FontAwesomeIcon icon={faBarsStaggered}  /></div>
                <div className={`${style} border border-white rounded-[7px] px-3 py-1 `} onClick={()=>{onSelectHeader("contact_us")}}>{tr.contact_us}</div>
                <div className='flex gap-x-2'>
                    <div className='w-[30px] cursor-pointer h-[30px] bd-card rounded-full text-white flex justify-center items-center' onClick={()=>onClickChangeThem()}>
                        {
                          isDark?<FontAwesomeIcon icon={faSun} className='text-[15px]' />:<FontAwesomeIcon icon={faMoon} className='text-[15px]' />
                        }
                  </div>
                  <div className='w-[30px] cursor-pointer h-[30px]  relative rounded-full  text-white flex justify-center items-center'>
                        {/* <FontAwesomeIcon icon={faGlobe}   className='text-[15px]' onClick={()=>{isShowModalLanguage(isShowModalLG)}}/>
                          <div className=''></div> */}
                          <div className='w-[30px] p-1 h-[30px]  rounded-full flex justify-center items-center bd-card ' onClick={()=>{isShowModalLanguage(isShowModalLG)}}>
                                        <img src={language.Image} className='w-full h-full object-cover rounded-full' alt="" />
                                    </div>
                        <div className={`absolute flex flex-col top-[44px] px-2 py-3 gap-y-2 ${isShowModalLG?"right-0":"right-[-200px]"}  bg-card  rounded-2xl ${ui.tr200}`}>
                              {
                                country.map(val=>(<>
                                  <div className={`flex gap-x-3 ${language.Code==val.Code? isDark?"bg-black":"bg-[#ededed]":""} items-end ${isDark?"hover:bg-black":"hover:bg-[#ededed]"}  rounded-xl py-2 px-6 pl-3 ${ui.tr100}`} onClick={()=>{selectLanguage(val)}}>
                                    <div className='w-[30px] p-1 h-[30px]  rounded-full flex justify-center items-center bd-card '>
                                        <img src={val.Image} className='w-full h-full object-cover rounded-full' alt="" />
                                    </div>
                                    <div className='color-3'>{val.EnglishName}</div>
                                </div>
                                </>))
                              }
                            
                        </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderSectionComponent