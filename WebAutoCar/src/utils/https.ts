import axios from "axios";

const https  =async (api : {url:string,method:string,data:Object})=>{
    var responseData:any = "";
    if(api.method.toLocaleLowerCase()=="get"){
       const response = axios.get(api.url).catch((error) =>{
            console.log(error.toJSON());
            // ShowSnackBar(error.message)
        });
        responseData = response;
    }
    else{
        const response = await axios.post(api.url,{...api.data}).catch((error) =>{
            console.log(error.toJSON());
            
            // ShowSnackBar(error.message)
        });
        responseData = response;
    } 
    return responseData;
}
export {https};