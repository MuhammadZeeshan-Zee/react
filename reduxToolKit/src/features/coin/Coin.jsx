
import { useSelector } from "react-redux"
function Coin() {
    
    const count = useSelector((state) =>state.counter.value)
  return (
    <div>
      <span >Count :  {count}</span>
    </div>
  )
}

export default Coin
