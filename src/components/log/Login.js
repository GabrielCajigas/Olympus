import React, { Component } from 'react'
import {connect} from 'react-redux';
import {LogIn} from '../../store/action/loginAction';
import {Redirect} from 'react-router-dom';


class Login extends Component {
    state = {
        email : "",
        password:""

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    hangleSubmit = (e) => {
        e.preventDefault();
        this.props.LogIn(this.state);
        
    }

    render() {
        const { authError, login } = this.props;
        if(login.uid) return <Redirect to='/'/>
        return (
            <div className=" text-white container mt-2">
                <form onSubmit={this.hangleSubmit}   >
                   <h2 className="text-custom mt-2 mb-2 ">Log In</h2>
                   <label htmlFor="email">email address</label>
                   <input onChange={this.handleChange}  type="email" className="form-control" id="email" placeholder="Enter email"></input>
                   <label htmlFor="password">password</label>
                   <input onChange={this.handleChange}  type="password" className="form-control" id="password" placeholder="password"/>
                   <button className="btn btn-info btn-round mt-2 text-dark">Login </button>
        <div className="text-danger">{authError ? <p>{authError}</p> : null}</div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        authError : state.login.authError,
        login : state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
      LogIn: (creds) => dispatch(LogIn(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login)
