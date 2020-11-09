import React from 'react';
function print({user}){
    return(
        <>
            <p>{user}</p>
        </>

    );


}


function Array(props){

    return (
        <>
            <div>
                {
                    users.maps(
                        user=> <print user={user.name} key={user.id}/>
                    )
                }
            </div>
        </>


    );
}

export default Array;