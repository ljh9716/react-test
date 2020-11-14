import React from 'react';

function Input ({onChange, name, email,onCreate }){
    return (
        <>
            <input 
                onChange={onChange} 
                name="name" 
                placeholder="이름"
                value = {name}
            />
            <input 
                onChange={onChange} 
                value = {email}
                name="email" 
                placeholder="이메일"
            />
            <button onClick={onCreate}>입력</button> 
        </>
    );
}

export default Input;