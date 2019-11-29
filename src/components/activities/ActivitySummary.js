import React from 'react';
import moment from 'moment';

const ActivitySummarry = (props) => {
    const {activity} = props; 
    return (
            <div className="card m-2 activity-sumarry">
                <div className="card-content ">
                    <span className="display-4 pl-2 class-tittle">
                        {activity.title}
                    </span>
                    <p className="pl-2">
                        {activity.authorFirstName}{activity.authorLastName}
                    </p>
                    <p className="pl-2 text-secondary">
                        {moment(activity.createdAt.toDate()).calendar()}
                    </p>
                </div>
            </div>
    )
}

export default ActivitySummarry;