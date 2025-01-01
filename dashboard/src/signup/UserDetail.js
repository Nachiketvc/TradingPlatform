import { useEffect, useState } from "react";

function UserDetail() {
    const [loggedInUser, setLoggedInUser] = useState('');
    useEffect(()=> {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    })
    return (
        <div>
            <h1>{loggedInUser}</h1>
           
        </div>
    );
}

export default UserDetail;
