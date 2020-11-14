import React,{useRef,/*useState*/useReducer,useMemo,useCallback} from 'react';
import Array from './Array';
import Counter from './Counter';
import Counter_reducer from './Counter_reducer';
import CreateUser from './CreateUser';

//그냥 함수를 만들면 컴포넌트가 매번 리렌더링 할 때마다, 함수 새롭게 만들어짐 -> props에서 다시 사용해야됨


function countActiveUsers(users){ // 리렌더링 될 때 계속 센다.
  console.log('활성 사용자 수 세는 중...');
  return users.filter(user=>user.active).length; // active == true 인 것만 가져오겠다
}

const initialState ={
  inputs: {
    name : "",
    email : "",
  },
  users : 
  [   
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
  ]
}

function reducer(state, action){
 switch (action.type){
  case 'CHNAGE_INPUT':
    return{
      ...state,
      inputs:{
        ...state.inputs,
        [action.name]: action.value
      }
    };
  default:
    throw new Error('Unhandled action');
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer,initialState); //  state 현재 상태
  const {user} = state; 
  const {name, email} = state.inputs;
  
  const onChange = useCallback(e=>{
    const {name,value} =e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value

    })
  })

  return (
    <div>
      <CreateUser name ={name} email={email} onChange={onChange}
     />
      <Array users={[]}/>
      <div>활성 사용자 현황 수 : 0 </div>
  </div>


  );
// const[inputs, setInputs]=useState({
//   name:"",
//   email:"",
// })
// const {name, email} =inputs;

// const onChange=useCallback((e)=>{                  
//   const {name, value}= e.target;
//   setInputs( {
//     ...inputs,
//     [name] : value
//   })
// },[inputs]); // 함수는 inputs가 바뀔 때만 함수가 새로 만들어짐



// const [users,setUsers] =useState([   //컴포넌트로 관리
//     {   
//       id:1,
//       name : "react",
//       email : "1@naver.com",
//       active:true
//     },{
//       id:2,
//       name : "app",
//       email : "2@naver.com",
//       active:false
//     },{
//       id:3,
//       name : "id",
//       email : "3@naver.com",
//       active:false
//     },
// ]);
// const nextId = useRef(4);

// const onCreate= useCallback(()=>{
//     const user ={         //새로운 유저 개체
//       id : nextId.current,
//       name,
//       email,
//     }
//     setUsers(users => users.concat(user)); // setUsers에서 최신 user를 조회하기 때문에 []에 안 넣어도 됨
//     // 1) spread   이용  복사 붙여넣기 
//     // 2) concat() 이용 setUsers(users.concat(user));
//     setInputs({
//       name:'',
//       email:'',
//     });
//     nextId.current += 1;
//   },[name,email]); //-> 여기다 안 집어넣으면 최신 업데이트된 변수가 아닌 오래 전에 만든 값이 집어넣어진다.

// const onRemove = useCallback(id =>{
//   setUsers(users.filter(user => user.id !==id)); // 아이디가 다른 것만 추출해서 집어 넣겠다 해당 아이디는 안 집어 넣을 것이다
//   },[users]);//-> 이 값은 users 값이 바뀌면 새로 만들어 지고 React.memo 값에도 영향x 

// const onToggle=useCallback(id=>{ //불변성을 유지시키기 위해 map
//   setUsers(users =>
//       users.map( user => user.id === id
//       ? {...user, active : !user.active} : user
//       )
//   );

// },[]);//-> 이 값은 users 값이 바뀌면 새로 만들어 지고 React.memo 값에도 영향x 

// //usememo는 특정값이 바뀌었을 때만 특정 함수 실행 연산 -> 안 바뀌였다면 값을 재사용 할 수 있게 
// const count = useMemo(()=>countActiveUsers(users),[users]); // 첫번째 파라미터는 함수 형태, 두번째 파라미터는 뎁스
// //뎁스 값이 바뀌는 것을 적용 시키겠다.   -> 컴포넌트 최적화 할 때, 사용한다.
// return (
//     <div>
//       <Counter/>
//       <Counter_reducer/>
//       <CreateUser
//        name={name} 
//       email={email} 
//        onChange={onChange} 
//        onCreate={onCreate}/>
//       <Array users={users} onRemove={onRemove} onToggle={onToggle}/>
// <div>활성 사용자 현황 수 : {count}</div>
//     </div>
//   );


}

export default App;
