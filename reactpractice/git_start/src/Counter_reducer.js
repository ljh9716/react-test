import React,{useReducer} from 'react';

function reducer(state, action){ // state 숫자 배열 등등 들어올 수 있다.
    switch(action.type){
        case "In": 
         return state+1;
        case "De": 
         return state-1;
        default: 
         throw new Error('Unhandled action');
    }
}

function Counter_reducer(){

    const [number,dispatch] = useReducer(reducer,0); //디스패치 액션 발생시킨다 use reducer hook 시작할 때는 0이고 

    const In = ()=>{
       dispatch({
           type: "In"
       })
    }
    const De = ()=>{  
       dispatch({
        type: "De"
    })
    }

    return (
        <>
            <button onClick={In}>+1</button>
            <button onClick={De}>-1</button>
            <p><strong>{number}</strong></p>
        </>
    );
}

export default Counter_reducer;