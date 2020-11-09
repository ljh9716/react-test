import React,{useRef} from 'react';
import Array from './Array';



function App() {
  const users =[
    {   
      id:1,
      name : "react"
    },{
      id:2,
      name : "app"
    },{
      id:3,
      name : "id"
    },
  ]
  const nextId = useRef(4);

  const onCreate= ()=>{
    console.log(nextId.current);

  }

  return (
    <div>
      <Array users={users}/>
    </div>
  );
}

export default App;
