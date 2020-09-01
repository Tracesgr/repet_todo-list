import {createStore} from 'redux'

import {todoData} from './firebase'

const initialState = {
  doneItem: {}
}

const allReducers = (state = initialState, action) => {
  switch (action.type) {

  case "ADD_ITEM":
    // console.log("connected")
    console.log("CONNECTED " + action.getItem)
    todoData.push(action.getItem);
    // console.log("push " + JSON.stringify(action.getItem))
    return state;
    case "UPDATE_DONE":
      todoData.child(action.doneItem.key).update({
        isDone : action.doneItem.isDone
      })
      return state
  // case "DONE":
  //   console.log("DONE")
  //   return {...state, doneItem["isDone"]: !doneItem["isDone"]};
  case "DELETE":
    todoData.child(action.deleteItem.key).remove();
    return state
  default:
    return state
  }
}
let store = createStore(allReducers)
store.subscribe(() =>{
  console.log(store.getState())
})
  // var simpleState = {
  //   status: false,
  //   array: ["a", "b", "c"]
  // }

  // var reducer = (state=simpleState, action) => {
  //   switch(action.type) {
  //     case "CHANGE_STATUS":
  //       return {...state, status: !state.status};
  //     case "ADD_ITEM":
  //       return {...state, array:[...state.array,action.addItem]};
  //       case "DELETE":
  //         return {...state, array:state.array.filter((value, key)=> key !== action.index)}
  //     default:
  //       break;
  //   }
  //   return state;
  // } 
// addData = (item) => {
//   todoData.push(item)
// }


// const arrayInitialState = ["con ga", "con vit"]
// const changeArray = (state = arrayInitialState, action ) => {
//     switch (action.type) {
  
//     case "NEW_ITEM":
//       return [...state, action.newItem];
//     case "DELETE_ITEM":
//       return [state.filter((value, key)=> key !== action.number)];
//     default:
//       return state
//     }
//   }
  
// const statusInitialState = false
// const changeStatus = (state = statusInitialState, action) => {
//   switch (action.type) {
//     case "CHANGE_STATUS":
//       return !state  ;
    
//     default:
//       return state;
//   }
// } 

// const allReducers = combineReducers({
//   status: changeStatus,
//   array: changeArray
// })
// var store = createStore(allReducers)
// store.subscribe(() => {
//   // console.log(store.getState());
// })

// store.dispatch({type:"ADD_ITEM",addItem:"d"})
// store.dispatch({type:"DELETE", index:1})

export default store