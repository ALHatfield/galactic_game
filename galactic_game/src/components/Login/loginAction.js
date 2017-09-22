import axios from 'axios';



function login(data){
    return dispatch => {
        return axios.post('/api/auth', data);
    }
}

export default login;