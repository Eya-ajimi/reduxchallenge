import React from "react";
import { useSelector } from "react-redux";
import GotCards from "./cards"
const CardList=({lists,deletelist})=>{
    const todos=useSelector(state=>state.Data)
    
     
    return (
     <div>
         {
             console.log(todos)
         }
         {todos.map(list=><GotCards key ={list.id} list={list} deletelist={deletelist}/>)}
     </div>
    );
};
export default CardList;