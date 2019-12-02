import React from 'react';
import { Link } from 'react-router-dom';
import LogInLink from './LogInLinks';
import LogOutLink from './LogOutLinks';
import {connect} from 'react-redux';


 

const Navigationbar = (props) => {
    const {login, profile} = props;
    const link = login.uid ?  <LogInLink profile={profile} /> : <LogOutLink/> ; 
    return (
        <nav className="navbar navbar-custom">
            <div className="container-fluid" >
                <Link to="/" className="nav-item  display-4 p-2" > Olympus Activities </Link>
                {login.isLoaded && 
                     link
                } 
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    // console.log(state);
    return {
        login : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navigationbar);