import axios from 'axios';

//post user data
 function userSignupRequest(userData){
    console.log('posting user data', userData);
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}

export default userSignupRequest;


