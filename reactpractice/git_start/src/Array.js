import React from 'react';

function Print({user, onRemove,onToggle}){
    const {name,email,id,active} =user;
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

    );
    //버튼이 눌렸을 때, 이러한 함수를 호출할 것이다. 파라미터는 id 값으로 
    // ()=>onRemove 이런 식으로 써라 걍 onRemove라고 쓰면 렌더링 될 때 걍 클릭 안해도 호출됨
    //onClick을 왜 계속 그렇게 쓰니?
}


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

export default Array;