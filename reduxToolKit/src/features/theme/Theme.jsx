import { useState } from "react"
import { useDispatch } from "react-redux"
import {Changecolor} from './themeSlice'
function Theme() {
  const dispatch=useDispatch()
  const [color, setColor]=useState('white')
  return (
    <div>
      <input type="text" onChange={(event)=>{setColor(event.target.value)}}/>
    
      <button onClick={()=>{dispatch(Changecolor(color))}}>Change color</button>
    </div>
  )
}

export default Theme
