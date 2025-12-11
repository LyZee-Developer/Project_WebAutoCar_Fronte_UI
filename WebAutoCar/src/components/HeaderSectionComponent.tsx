import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logor from '../assets/logo/logor.png'
import { faBarsStaggered, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { changeTheme, setIsShowNavLeftMenu } from '../store/system/SystemStore'
import '../styles/component/HeroSection.scss'
const HeaderSectionComponent=()=> {
  const isDark = useSelector((state:RootState)=>state.system.isDark);
  const isShowNavLeftMenu = useSelector((state:RootState)=>state.system.isShowNavLeftMenu);
  const dispatch = useDispatch();
  const onClickChangeThem=()=>{
    dispatch(changeTheme(!isDark))
  }
  const onClickNavLeftMenu=()=>{
    dispatch(setIsShowNavLeftMenu(!isShowNavLeftMenu))
  }
  var style="cursor-pointer text-[13px] opacity-70 hover:opacity-100 transition-all ease-in-out";
  return (
    <>
        <div className="flex bg-black justify-between items-center px-2"> 
            <div className='w-[130px]'>
                <img src={logor} className='w-full h-full ' alt="" />
            </div>
            <div className='flex items-center gap-x-6 text-white'>
                <div className={`${style} max-[640px]:hidden`}>Home</div>
                <div className={`${style} max-[640px]:hidden`}>Our Service</div>
                <div className={`${style} max-[640px]:hidden`}>Our Work</div>
                <div className={`${style} max-[640px]:hidden`}>About Us</div>
                <div className='sm:hidden' onClick={()=>onClickNavLeftMenu()}><FontAwesomeIcon icon={faBarsStaggered}  /></div>
                <div className={`${style} border border-white rounded-[7px] px-3 py-1 `}>Contact Us</div>
                <div className='w-[30px] cursor-pointer h-[30px]  text-white flex justify-center items-center' onClick={()=>onClickChangeThem()}>
                      {
                        isDark?<FontAwesomeIcon icon={faSun} className='text-[15px]' />:<FontAwesomeIcon icon={faMoon} className='text-[15px]' />
                      }
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderSectionComponent