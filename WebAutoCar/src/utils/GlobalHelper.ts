const str:{name:string,test:boolean} ={
    name:"LyLeangSeng",
    test:true
}
const translate=(kh:string,en:string)=>{
    var lang = localStorage.getItem("lang");
    var value = kh;
    if(lang==null || lang=="") {
        value= kh;
        return;
    }
    var obj = JSON.parse(lang);
    if(obj.Code !=="cam") value = en;
    return value;
}
const ui={
    tr100:"transition-all duration-100 ease-in",
    tr200:"transition-all duration-200 ease-in",
    animation:"animate-pulse bg-loading"
}

export {ui,str,translate};