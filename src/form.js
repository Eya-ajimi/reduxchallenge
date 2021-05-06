import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {useState} from "react"; 
import "./App.css"
import { useDispatch } from 'react-redux';
import { addTodo } from './js/action/counteraction';
const FormExampleForm = ({add}) => { 
  const [name,setName]=useState("");
  const [company,setCompany]=useState("");
  const [notes,setNotes]=useState("");
  const dispatch =useDispatch()
   const adding =({})=>{
    dispatch( addTodo({Id: Date.now(),name,company,notes}))
     setCompany('');
     setName('');
     setNotes('');
   };
 return ( 
  <Form >
    <Form.Field>
      <label>Company</label>
      <input placeholder='company Name ' 
       value= {company}
       onChange={(e) => setCompany(e.target.value)}
       />
    </Form.Field>
    <Form.Field>
      <label>Name</label>
      <input placeholder=' Name' 
      value= {name}
      onChange={(e) => setName(e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label>Notes</label>
      <input placeholder='Notes' 
      value= {notes}
      onChange={(e) => setNotes(e.target.value)}
      />
    </Form.Field>

    <Button onClick={adding}>Add Another one</Button>
  </Form>
)
};

export default FormExampleForm