
import { FaBeer } from 'react-icons/fa';
function Nav({menu,logo,btn}) {
  return (
   <nav className="nav">
      <h1>{logo}</h1>
      <ul>
       {menu.map((element,index)=>{
        return(
           <li key={index}> {element}</li>
        )
       })}
      </ul>
      <button>{btn}<FaBeer /></button>
   </nav>
  )
}

export default Nav