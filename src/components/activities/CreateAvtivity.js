import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createActivity} from '../../store/action/activityAction';
import {Redirect} from 'react-router-dom';


class CreateActivity extends Component {
    state = {
        title : "",
        content:""

    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createActivity(this.state);
        this.props.history.push('/');
    }

    render() {
        const {login} = this.props;
        if(!login.uid) return <Redirect to='/login'/>
        return (
            <div className=" text-white container mt-2">
                <form onSubmit={this.handleSubmit}   >
                   <h2 className="text-custom mt-2 mb-2 ">Create Activity</h2>
                   <label htmlFor="title">title</label>
                   <input onChange={this.handleChange}  type="text" className="form-control" id="title" placeholder="Enter title"></input>
                   <label htmlFor="content">Activity content</label>
                   <textarea onChange={this.handleChange}  type="" className="form-control" id="content" placeholder="content"></textarea>
                   <button className="btn btn-info btn-round mt-2 text-dark">Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        login : state.firebase.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
      createActivity: (activity) => dispatch(createActivity(activity))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity)
