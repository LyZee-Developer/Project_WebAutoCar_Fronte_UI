import axios from "axios";
const https  =async (api : {url:string,method:string,data:Object})=>{
    var responseData:any = "";
    var isSuccess:boolean = false;
    if(api.method.toLocaleLowerCase()=="get"){
        responseData= axios.get(api.url).catch((error) =>{
            var err = error.toJSON();
            isSuccess=true;
            if(err.code=="ERR_NETWORK"){
                isSuccess=false;
                return {data:undefined,error:err,isSuccess:isSuccess}
            } 
        });
        return {data:responseData,error:undefined,isSuccess:isSuccess}
    }
    else{
        responseData= await axios.post(api.url,{...api.data}).catch((error) =>{
            var err = error.toJSON();
            isSuccess=true;
            if(err.code=="ERR_NETWORK"){
                isSuccess=false;
                return {data:undefined,error:err,isSuccess:isSuccess}
            }
        });
        return {data:responseData?.data,error:undefined,isSuccess:isSuccess}
    } 
}
export {https};