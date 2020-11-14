import React from 'react';

function CreateUser({name,email,onChange,onCreate}){
    console.log(CreateUser);
    return (
     <div>
         <input name="name" 
                placeholder="계정명" 
                onChange={onChange} 
                value={name}/>
         <input name="email" 
                placeholder="이메일" 
                onChange={onChange} 
                value={email}/>
         <button onClick={onCreate}>등록</button>
     </div>
        
    );

}
export default React.memo(CreateUser); // 최적화??