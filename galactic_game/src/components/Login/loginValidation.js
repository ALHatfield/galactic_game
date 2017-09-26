import Validator from 'validator';
import isEmpty from 'lodash';

export default function validateInput(data){
    let errors = {};
    //const email = encodeURIComponent(email);
    //const password = encodeURIComponent(password);

    if(Validator.isEmpty(data.email)){
        errors.email = 'This Field is Required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This Field is Required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


