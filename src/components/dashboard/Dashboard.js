import React, { Component }from 'react';
import Notification from './Notifications';
import ActivityList from '../activities/ActivityList';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';





class Dashboard extends Component {
    render (){
        const {activities , login , notifications} = this.props;
        if(!login.uid) return <Redirect to='/login'/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className=" border border-bottom-0 border-left-0 border-top-0  col-sm-6">
                    <ActivityList activities = {activities} />
                    </div>
                    <div className="col-sm-5">
                    <Notification notifications={notifications}  />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        activities : state.firestore.ordered.activities,
        login : state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'activities', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
