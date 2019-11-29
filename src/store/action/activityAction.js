

export const createActivity = (activity) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userid = getState().firebase.auth.uid
        firestore.collection('activities').add({
            ...activity,
            authorFirstName: profile.firstName,
            authorLastname: profile.lastName,
            authorId: userid,
            createdAt: new Date()
        }).then(()=> {
            dispatch ({ type : 'CREATE_ACTIVITY', activity});
        }).catch((err)=>{
            dispatch ({ type : 'CREATE_ACTIVITY_ERROR', err});
        })
        
    }
};


export const deleteActivity = (activity) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log(getState().firestore.ordered.activities[0].id);
        const activityid = getState().firestore.ordered.activities[0].id;
        firestore.collection('activities').doc(activityid).delete().then(()=> {
            dispatch ({ type : 'DELETE_ACTIVITY', activity});
        }).catch((err)=>{
            dispatch ({ type : 'DELETE_ACTIVITY_ERROR', err});
        })
        
    }
};