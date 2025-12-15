import { useDispatch, useSelector } from "react-redux";
import { ui } from "../utils/GlobalHelper"
import type { RootState } from "../store/store";
import logor from '../assets/logo/logor.png'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectHeaderAction, setIsShowNavLeftMenu } from "../store/system/SystemStore";
import { data_header } from "../utils/system_data";

const SlideMenuComponent = () => {

    const isShowNavLeftMenu = useSelector((state:RootState)=>state.system.isShowNavLeftMenu);
    
    const dispatch = useDispatch();
    const CloseNavLeft=()=>{
        dispatch(setIsShowNavLeftMenu(!isShowNavLeftMenu))
    }
    const OnSelectNavLeft=(type:string)=>{
        dispatch(SelectHeaderAction(type))
        dispatch(setIsShowNavLeftMenu(!isShowNavLeftMenu))
    }
  return (
    <>
    <div className={`w-screen h-screen fixed left-0 top-0 z-5 bg-[#000000b6] blur-[10px] ${!isShowNavLeftMenu?`hidden`:``} `}></div>
    <div className={`fixed min-[640px]:hidden z-10 top-0 ${isShowNavLeftMenu?`left-0`:`left-[-430px]`}  w-[70%] bg-black h-screen ${ui.tr200}`}>
            <div className="flex justify-between items-center pl-1 pr-4 pt-2">
                <div className='w-[130px]'>
                    <img src={logor} className='w-full h-full ' alt="" />
                </div>
                <div className="text-white cursor-pointer" onClick={()=>CloseNavLeft()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </div>
            <div className="text-white flex flex-col  pt-3 px-4">
                {
                    data_header.map(val=>
                        <div className={`w-full cursor-pointer rounded-md pl-5 py-3 hover:bg-[#cacaca27] ${ui.tr200}`} onClick={()=>OnSelectNavLeft(val.code)}>
                            {val.title}
                        </div>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default SlideMenuComponent