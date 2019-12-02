import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../store/action/loginAction';


 

const LogInLink = (props) => {
    // console.log(props);
    return (
            <ul className="rigth">
                <a href="/login" onClick={props.logOut} className="nav-item  display-5 p-2" > Log Out </a>
                <Link to="/create" className="nav-item  display-5 p-2" > Create Activity </Link>
                <Link to="/" className="btn btn-square btn-info  nav-item   p-2" >  {props.profile.initials}</Link>
            </ul>
            
    
    )
}


const mapDispatchToProps = (dispatch) =>{
    return {
        logOut : () => dispatch(logOut())
    }
}

export default connect(null,mapDispatchToProps)(LogInLink);