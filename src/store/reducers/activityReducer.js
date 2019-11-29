
const initState = {
};


const activityReducer = (state= initState, action) => {
    switch (action.type){
        case 'CREATE_ACTIVITY':
            console.log('created project', action.activity);
            return state;
        case 'CREATE_ACTIVITY_ERROR':
                console.log('created project error', action.err);
                return state;
        case 'DELETE_ACTIVITY':
                console.log('Delete project');
                return state;
        case 'DELETE_ACTIVITY_ERROR':
                    console.log('Delete project error', action.err);
                    return state;
        default:
            return state;
    }
    
}

export default activityReducer;