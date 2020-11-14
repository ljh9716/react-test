import React from 'react';

function Div({user,onToggle,onRemove}){
    const {id,name,active,email}=user;
    return(
        <>

            <p style={
                {
                    color:active ? "green":"black",
                    cursor:"pointer"
                }  
            } onClick={()=>onToggle(id)}>{id}:{name}</p> <strong>{email}</strong>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </>

    );

}

function Array ({onToggle, onRemove, users}){
    
    
    return (
        <>
            {   
                users.map(
                    user=><Div 
                               user={user} 
                               key={user.id} 
                               onToggle={onToggle} 
                               onRemove={onRemove}
                            />
                )

            }
        </>


    )




}
export default Array;