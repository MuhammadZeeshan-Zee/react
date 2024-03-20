
import {useSelector,useDispatch} from 'react-redux'
import {increment, decrement,incrementByAmount} from './counterSlice'
function Counter() {
    const count = useSelector((state) =>state.counter.value)
    const dispatch=useDispatch()
    const themecolor=useSelector((state)=>state.theme.color)

  return (
    <div>
      <h1 style={{color: themecolor}}>Redux Toolkit Counter App</h1>
      <span>Count :  {count}</span>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(incrementByAmount(10))}}>Add by 10</button>

    </div>
  )
}

export default Counter
