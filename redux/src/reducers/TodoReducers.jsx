
const initialData={
    list:[]
}
const TodoReducers=(state=initialData,action)=> {
    switch(action.type){
        case "ADD_TODO":
           { 
            console.log('im action of add'+action.type);
            const {id,data} = action.payload;
            return {
                
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data: data 
                    }
                ]
            }}
            case "DELETE_TODO":
            { 
             const newList=state.list.filter((item)=>{return item.id!==action.id})
             return {
 
                 ...state,
                 list: newList
             }}
             case "REMOVE_TODO":
             { 
              return {
  
                  ...state,
                  list: []
              }}
            default:
                 return state
    }
}
export default TodoReducers