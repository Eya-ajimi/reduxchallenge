
import { Addlist,  Deletelist  } from "../constants/actiontype"

const initstate={ Data : [
    {
  Id: 1,
  company : 'winterfell ',
  name :"jhon snow" ,
  notes : "Good guy",
},
{
    Id: 2,
    company : 'Casterly Rock ',
    name :"Tyrion Lanester" ,
    notes : "Good guy",
  },
  {
    Id: 3,
    company : 'Dreadfort ',
    name :"Ramsy" ,
    notes : "Bad guy",
  }
],
}
const counterreducer =(state=initstate,action)=>{
switch (action.type){
    case Addlist:
        return {
          ...state,
          Data: [...state.Data,action.payload]
        //  Data: state.Data.concat(action.payload),
        };
  
      case Deletelist:
        return {
          ...state,
          Data: state.Data.filter((el, i) => el.id !== action.payload),
        };
        default:return state

}
}
export default counterreducer