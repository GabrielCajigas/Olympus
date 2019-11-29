import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../store/action/loginAction';

class Register extends Component {
    state = {
        email : "",
        password:"",
        firstName:"",
        lastName:""

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    hangleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state);
    }

    render() {
        const { login, authError } = this.props;
        if(login.uid) return <Redirect to='/'/>
        return (
            <div className=" text-white container mt-2">
                <form onSubmit={this.hangleSubmit}   >
                   <h2 className="  pt-2 pb-2 text-custom ">Register</h2>
                   <label htmlFor="firstName">firstName</label>
                   <input onChange={this.handleChange}  type="text" className="form-control" id="firstName" placeholder="Enter firstName"></input>
                   <label htmlFor="lastName">lastName</label>
                   <input onChange={this.handleChange}  type="text" className="form-control" id="lastName" placeholder="Enter lastName"></input>
                   <label htmlFor="email">email address</label>
                   <input onChange={this.handleChange}  type="email" className="form-control" id="email" placeholder="Enter email"></input>
                   <label htmlFor="password">password</label>
                   <input onChange={this.handleChange}  type="password" className="form-control" id="password" placeholder="password"/>
                   <button className="btn btn-info btn-round mt-2 text-dark">Register </button>
                   { authError ? <p>{authError}</p> : null }
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

  
const mapDispatchToProps = (dispatch)=> {
    return {
      register: (newuser) => dispatch(register(newuser))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Register)

