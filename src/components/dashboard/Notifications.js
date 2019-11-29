import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
    const {notifications}= props;
      return (
    <div className=" mt-3 container text-white">
      <div className="card ">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="  online-users">
             { notifications && notifications.map(notifi => {
                 return (
                    <li key={notifi.id}>
                        <span className="text-user"> {notifi.user }</span>
                        <span className="text-user"> {notifi.content}</span>
                        <div className="text-noti"> {moment(notifi.time.toDate()).fromNow()} </div>
                    </li>
                 )
             })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications