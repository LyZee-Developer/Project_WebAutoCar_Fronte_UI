import type { Person } from '../interfaces/person'
const FooterSectionComponent=({person,home,onClickButn}:{person:Person,home?:string,onClickButn:(a1:string) => {}})=> {
    const clickEvent=(name:string) => {
        onClickButn(name);
    }
  return (
    <div>
        <div>FooterSectionComponent</div>
        <div>{home}</div>
        <div>{person.name}</div>
        <div>{person.email}</div>
        <div>{person.age}</div>
        <div>{person.phone}</div>
        <button onClick={()=>clickEvent(person.name)} className='bg-amber-300'>Clike to alert</button>
    </div>
    
  )
}

export default FooterSectionComponent