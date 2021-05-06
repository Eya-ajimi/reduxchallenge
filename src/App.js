import React from "react"
import {useState} from "react"
import './App.css';
//import {useSelector,useDispatch} from "react-redux";
//import {increment,decrement} from "./js/action/counteraction"
import Form from "./form"
//import Card from "./cards"
import {Data} from "./Data"
import CardList from "./cardList"

 function App() {
  const [lists,setLists]=useState(Data)
  const add=(newlist)=>{
    setLists([...lists,newlist])
  }
  const deletelist=(id)=>{
    setLists(lists.filter(lis => lis.id!==id))
  }
  return (
    <div className="App">
      <CardList lists= {lists} deletelist={deletelist}/>
      <Form add={add}/>
      
    </div>
  );
}
export default App ;
{/*import react from "react "
import cardList  from "./cardList"
import Form from "./form"
function App() {

  }
 
  }
  return (
    <div className="App">
      <cardList/>
      <Form >
      
    </div>
  );
}
export default App ;*/}