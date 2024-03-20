
import './App.css'
import Card from './components/card'
function App() {

let sobj={
  fname:"arif",
  religion:"muslim"
}
let sarr=[1,2,3,4]
  return (
    <>
      hi
   <Card username="zeeshan" age="19" nobj={sobj} narr={sarr} ntext="click here"/>
   <Card username="Dewi" age="19"/>

    </>
  )
}

export default App
