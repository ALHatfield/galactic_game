import React from "react";
import {Redirect} from "react-router-dom";
import TextFieldInput from '../common/TextFieldInput';
import validateInput from './loginValidation';
import {connect} from 'react-redux';
import login from './loginAction';
import {PropTypes} from "prop-types";
import bgEarthHorizon from '../../assets/bg_earth_horizon.png';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
            Redirect: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
//validate user using validateInput file
    isValid(){
        const {errors, isValid} = validateInput(this.state);

        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
//submit user request
    onSubmit(e){
        e.preventDefault();
//valid user will log
        if(this.isValid()){
            console.log('data is valid');
            this.setState({ errors: {}, isLoading: true});
            // if data is good, make server request
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({ errors: err.data.errors, isLoading: false})
            );
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        const {errors, email, password, isLoading} = this.state;
        return (
          <div>
            
            <img id='bg-image' height='100%'  width='100%' alt="" src={bgEarthHorizon}/>            
            
            {this.state.Redirect ? <Redirect to="/" /> :
            <form onSubmit={this.onSubmit}>
                <h1>Login.</h1>

                { errors.form && <div className='alert alert-danger'>{errors.form}</div>}
                <TextFieldInput
                    field='email'
                    label='email'
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                />

                <TextFieldInput
                    field='password'
                    label='Password'
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type='password'
                />
                <div className='form-group'><button className='btn btn-primary btn-lg' disabled={isLoading}>Login</button></div>
            </form>
            }
        </div>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginForm);