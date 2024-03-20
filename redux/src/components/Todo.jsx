import  { useState } from 'react'
import TextField from '@mui/material/TextField'
import {addTodo,deleteTodo,removeTodo} from '../actions/index.jsx'
import {useSelector,useDispatch} from 'react-redux'
function Todo() {
    const [inputData,setInputData]=useState('')
    const dispatch=useDispatch()
    let list=useSelector((state)=>{
      console.log(state);
      console.log(state.TodoReducers.list);
      return state.TodoReducers.list})
    // const {id,data}={list};
    console.log(list)
  return (
 <>
    <div>
        <TextField type="text" id="standard-basic" label="ADD TODO" variant="standard" 
        value={inputData} onChange={(event)=>{setInputData(event.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(inputData), setInputData(''))}}>Add</button>
    </div>
    <div>
      {
    list.map((elem)=>{
      return(
        <div key={elem.id}>
        <span>{elem.data}</span>
        <button onClick={   ()=>{dispatch(deleteTodo(elem.id))}}>delete</button>
        </div>
      )
    })
  }   
    </div>
    <button onClick={   ()=>{dispatch(removeTodo())}}>REMOVE ALL</button>
        
    </>
  )
}

export default Todo
