const TextMidLineComponent=({label}:{label:string})=> {
  return (
    <div className="w-[150px] relative h-[20px] mt-3">
        <div className="w-full top-[6px] z-[1px] absolute h-[2px] bg-black px-3"></div>
        <div className="w-full top-[13px] z-[1px] absolute h-[2px] bg-black"></div>
        <div className="bg-white! z-[3px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute px-2">{label}</div>
    </div>
  )
}

export default TextMidLineComponent