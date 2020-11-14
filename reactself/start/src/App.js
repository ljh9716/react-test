import React,{useState, useRef} from 'react';
import Input from './Inputs';
import Array from './Array';

function App() {
  const [users,setUsers] =useState([]);
  const nextId = useRef(1);
  const [inputs,setInputs]=useState(
    {
    name:"",
    email:""
    }
  )
  const {name,email} = inputs;
  
  const onChange = (e)=>{
    const {name, value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const onCreate = ()=>{
    const user ={
      id: nextId.current,
      name,
      email,
      active:false
    };
    setUsers([...users,user])
    setInputs({
      name:"",
      email:""
      
    });
   nextId.current +=1;
  }

  const onToggle = (id)=>{
    setUsers(
      users.map(
        user=> user.id ===id ?
        {...user, active : !user.active} : user
      )
    )
  }

  const onRemove = (id)=>{
    setUsers(users.filter( user => user.id !== id ));
  }
  
  return (
    <div>
      <Input 
        name={name}
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <Array
        onToggle={onToggle}
        onRemove={onRemove}
        users ={users}
      />
    </div>
  );
}

export default App;
