import axios from "axios";
import { ShowSnackBar } from "./system_data";

const https  =async (api : {url:string,method:string,data:Object})=>{
    var responseData:any = "";
    var isSuccess:boolean = false;
    if(api.method.toLocaleLowerCase()=="get"){
       const response = axios.get(api.url).catch((error) =>{
            var err = error.toJSON();
            // ShowSnackBar(error.message)
            isSuccess=true;
            if(err.code=="ERR_NETWORK"){
                ShowSnackBar(err.message,"error")
                isSuccess=false;
            } 
        });
        
        responseData = response;
    }
    else{
        const response = await axios.post(api.url,{...api.data}).catch((error) =>{
            var err = error.toJSON();
            isSuccess=true;
            if(err.code=="ERR_NETWORK"){
                ShowSnackBar(err.message,"error")
                isSuccess=false;
            }
        });
        
        responseData = response;
    } 
    return {responseData,isSuccess:isSuccess};
}
export {https};