import React from 'react';
import ActivitySummarry from './ActivitySummary';
import {Link} from 'react-router-dom';

const ActivityList = (props) => {

const {activities} = props;

    return (
        <div className="activity-list text-white container mt-3 ">
            <h1>Activity List</h1>
           {activities && activities.map(activity => {
               return (
                  <Link  className="text-custom " to={`/activities/${activity.id}`}  key = {activity.id}>
                       <ActivitySummarry activity = {activity}  />
                  </Link>
               )
           })}
        </div>
    )
}

export default ActivityList;