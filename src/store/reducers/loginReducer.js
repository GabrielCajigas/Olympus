
const initState = {
    authError: null
  }
  
  const loginReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
        return {
          ...state,
          authError: 'Login failed'
        }
      case 'LOGIN_SUCCESS': 
        return {
          authError: null
        }
      case 'LOGOUT': 
        // console.log('Logout')
        return state
      case 'REGISTER_SUCCESS':
        // console.log('signup success')
        return {
        ...state,
        authError: null
      }
      case 'REGISTER_ERROR':
        //  console.log('signup error')
        return {
        ...state,
        authError: action.err.message
      }
      default:
        return state
    }
  };
  
  export default loginReducer;