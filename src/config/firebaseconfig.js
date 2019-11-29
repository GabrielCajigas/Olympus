  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBY3BlBnZs-5TnzNvVLHQ_MgrlqhTmQg_E",
    authDomain: "olympus-9e3be.firebaseapp.com",
    databaseURL: "https://olympus-9e3be.firebaseio.com",
    projectId: "olympus-9e3be",
    storageBucket: "olympus-9e3be.appspot.com",
    messagingSenderId: "404658355550",
    appId: "1:404658355550:web:f66dee40a9a61037ace3cf",
    measurementId: "G-M8YFBC5NGY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({});


  export default firebase;