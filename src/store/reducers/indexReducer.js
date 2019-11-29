import loginReducer from './loginReducer';
import activityReducer from './activityReducer';
import  { combineReducers } from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const IndexReducer = combineReducers ({
    login : loginReducer,
    activity : activityReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default IndexReducer;