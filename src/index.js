import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import indexRedcuer from './store/reducers/indexReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore,getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseconfig from './config/firebaseconfig';



const store = createStore(indexRedcuer,
    compose(
         applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
         reactReduxFirebase(firebaseconfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}),
         reduxFirestore(firebaseconfig) // redux bindings for firestore
        )
        );

        store.firebaseAuthIsReady.then(() => {
            ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
            serviceWorker.unregister();
          });
            
           
         
          

