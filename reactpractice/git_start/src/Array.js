import React,{useEffect} from 'react';

const Print = React.memo(function Print({user, onRemove,onToggle}){ //최적화
    const {name,email,id,active} =user;
  
    /*
    useEffect(()=>{console.log("컴포넌트 화면에 나타남") // 1. 실행하고 싶은 함수 2 .deps 만약 배열 비워있다면 컴포넌트 처음 나타날 때만 실행
       props ->state
       REST API
       라이브 js 사용할 때에도
       setinterval, setTimeout
    
    return ()=>{
            console.log("컴포넌트가 화면에서 사라짐");
        setInterval , setTimeout에서 등록됐던 작업들을 제거할 때 clearInterval clearTimeout
        라이브러리 인스턴스 제거
        
        }                                   
    },[]);
    */

    useEffect(()=>{
        console.log("user값이 설정됨");
        console.log (user); // 해당 값이 보일 때,
        return ()=>{
            console.log("user값이 삭제됨");
            console.log(user); // 해당 값이 바뀌기 직전에
        };
    },[user]); // user 값이 바뀌거나 설정됐을 때 호출 된다. 함수를 호출할 때 만약 어떤 값을 사용한다면 꼭 배열에다가 집어넣어야된다 ex) 함수에 user 사용 -> [user] / props 가져와도 []에 집어넣어야한다.
       
       return(
       <div>
            <b  style={{
                        color:active ? "green":"black",
                        cursor:"pointer"
                       }}
                onClick={()=>onToggle(id)}>{name}
            </b>
                 <span>({email})  {id}</span>
                  <button onClick={()=> onRemove(id)}>{id}삭제</button> 
        </div>
    //버튼이 눌렸을 때, 이러한 함수를 호출할 것이다. 파라미터는 id 값으로  
    // ()=>onRemove 이런 식으로 써라 걍 onRemove라고 쓰면 렌더링 될 때 걍 클릭 안해도 호출됨
    //onClick을 왜 계속 그렇게 쓰니?
    )
});

function Array({users, onRemove,onToggle}){

    return (
        <>
            <div>
                {
                    users.map(
                        user=> (<Print 
                                     user={user} 
                                     key={user.id}
                                     onRemove={onRemove}
                                     onToggle={onToggle}
                                />)
                    )
                }
            </div>
        </>


    );
}

export default React.memo(Array,(prevProps, nextProps)=>nextProps.users === prevProps.users);
// 두번째 파라미터 만약 전 props가 후 props와 같으면 false -> 리렌더링 / true -> 리렌더링 x 