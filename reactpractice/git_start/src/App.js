import React,{useRef,useState} from 'react';
import Array from './Array';
import CreateUser from './CreateUser';



function App() {
const[inputs, setInputs]=useState({
  name:"",
  email:"",
})
const {name, email} =inputs;

const onChange=(e)=>{
  const {name, value}= e.target;
  setInputs( {
    ...inputs,
    [name] : value
  })
}



const [users,setUsers] =useState([   //컴포넌트로 관리
    {   
      id:1,
      name : "react",
      email : "1@naver.com",
      active:true
    },{
      id:2,
      name : "app",
      email : "2@naver.com",
      active:false
    },{
      id:3,
      name : "id",
      email : "3@naver.com",
      active:false
    },
]);
const nextId = useRef(4);

const onCreate= ()=>{
  const user ={         //새로운 유저 개체
    id : nextId.current,
    name,
    email,
  }
  setUsers([...users,user]); 
  // 1) spread   이용  복사 붙여넣기 
  // 2) concat() 이용 setUsers(user.concat(user));
  setInputs({
    name:'',
    email:'',
  });
  nextId.current += 1;
};

const onRemove = id =>{
  setUsers(users.filter(user => user.id !==id)); // 아이디가 다른 것만 추출해서 집어 넣겠다 해당 아이디는 안 집어 넣을 것이다
};

const onToggle=id=>{ //불변성을 유지시키기 위해 map
  setUsers(
      users.map( user => user.id === id
      ? {...user, active : !user.active} : user
      )
  );

};


return (
    <div>
      <CreateUser
       name={name} 
      email={email} 
       onChange={onChange} 
       onCreate={onCreate}/>
      <Array users={users} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
