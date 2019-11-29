const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.activityCreated = functions.firestore
  .document('activities/{activityID}')
  .onCreate(doc => {

    const activity = doc.data();
    const notification = {
      content: 'Added a new activity',
      user: `${activity.authorFirstName} ${activity.authorLastname}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const notification = {
          content: 'Logged in',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);

      });
});


exports.activityDeleted = functions.firestore
  .document('activities/{activityID}')
  .onDelete(doc => {
    const activity = doc.data();
    const notification = {
      content: `Delete the activity ${doc.data().title}`,
      user: `${activity.authorFirstName} ${activity.authorLastname}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});