const str:{name:string,test:boolean} ={
    name:"LyLeangSeng",
    test:true
}
const translate=(kh:string,en:string)=>{
    var lang = localStorage.getItem("lang");
    var value = kh;
    if(lang==null || lang=="") return kh;
    var obj = JSON.parse(lang);
    if(obj.code !=="cam") value = en;
    return value;
}
const ui={
    tr100:"transition-all duration-100 ease-in",
    tr200:"transition-all duration-200 ease-in",
    animation:"animate-pulse bg-loading"
}
const isEmptyData=(data:any)=>{
    return Object.keys(data).length === 0 || data=="" || data==null || data==undefined || data.length==0;
}
export {ui,str,translate,isEmptyData};