import React from 'react';
import { Link } from 'react-router-dom';



 

const LogOutLink = () => {
    return (
            <ul className="rigth">
                <Link to="/login" className="nav-item  display-5 p-2" > Log In </Link>
                <Link to="/register" className="nav-item  display-5 p-2" > Register </Link>

            </ul>
            
    
    )
}

export default LogOutLink;