import React from 'react'
import {connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose }from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';
import {deleteActivity} from '../../store/action/activityAction';


const ActivityDetails = (props) => {
 
  
    const { activity, login } = props;
    // console.log(activity);
    function del() {
      props.deleteActivity(activity);
      props.history.push('/');
      window.location.reload(false);
    }
    if(!login.uid) return <Redirect to='/login'/>
    if (activity) {
      return (
    <div className="text-white container mt-2">
        <div className="text-center card m-2 border-top-0 activity-detail">
            <div className="card-content bgtrans ">
              <span className="display-4 pl-2 class-tittle">{activity.title}</span>
              <p className="p-2">{activity.content}</p>
            </div>
        </div>
        <div className="p-2" >Posted by {activity.authorFirstName} {activity.authorLastName}</div>
        <div className="pl-2 text-secondary">{moment(activity.createdAt.toDate()).calendar()}</div>
        { login.uid ===  activity.authorId ? <button onClick={( )=> del() }> Delete </button> : ""}
    </div>
      )
    } else {
      return (
        <div className=" text-white  text-center card m-2 border-top-0 activity-detail">
          <p>Loading activity...</p>
        </div>
      )
    }
  }


const mapStateToProps = (state, _Props) => {
    const id =_Props.match.params.id;
    const activities = state.firestore.data.activities;
    const activity = activities ? activities[id] : null ;

    return {
     activity : activity,
     login : state.firebase.auth
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      deleteActivity: (activity) => dispatch(deleteActivity(activity))
    }
  }

export default compose(
    connect(mapStateToProps , mapDispatchToProps),
    firestoreConnect([{
        collection : 'activities'
    }])
)(ActivityDetails)






