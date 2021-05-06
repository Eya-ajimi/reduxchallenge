import {
    Addlist,
    Deletelist,
    COMPLETE,
    
  } from '../constants/actiontype';
  
  export const addTodo = (newTodo) => {
    return { type: Addlist, payload:newTodo };
  };
  
  export const deleteTodo = (payload) => {
    return { type: Deletelist, payload };
  };
  
  export const completeTodo = (payload) => {
    return { type: COMPLETE, payload };
  };