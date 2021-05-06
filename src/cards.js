import React from 'react'
import './App.css';
import {useDispatch} from "react-redux"
import {deleteTodo } from './js/action/counteraction';
import { Data } from './Data';
import {useSelector} from "react-redux"

const GotCards = ({list , deletelist}) => { 

 
  const dispatch = useDispatch();
   
    
    return(
        <>
         <ul >
           <li> Name: {list.name} </li>  
           <li> company:{list.company} </li>  
           <li> Notes: {list.notes} </li>  
         </ul>
         <br></br>
         <div> 
         <button onClick={() => dispatch(deleteTodo(Data.id))}>Delete</button>
        </div>
       
         </>
      
    );
    } ;

export default GotCards ;