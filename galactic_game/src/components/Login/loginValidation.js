import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};

    if(Validator.isEmpty(data.identifier)){
        errors.identifier = 'This Field is Required';
    }
    if(Validator.isEmpty(data.password)){
        errors.password = 'This Field is Required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

