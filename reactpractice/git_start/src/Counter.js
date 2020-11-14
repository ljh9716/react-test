import React,{useState} from 'react';

function Counter(){
    const [num,setNum]= useState(0);

    const In = ()=>{
        setNum(num=>num+1);
    }
    const De = ()=>{
        setNum(num=>num-1);
    }

    return (
        <>
            <button onClick={In}>+1</button>
            <button onClick={De}>-1</button>
            <p><strong>{num}</strong></p>
        </>
    );
}

export default Counter;