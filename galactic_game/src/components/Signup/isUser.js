
import axios from 'axios';

//get user data
function isUserExists(identifier){
    //console.log(field);
    return dispatch => {
        return axios.get(`/api/users/${identifier}`);
    }
}

export default isUserExists;