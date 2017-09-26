import React from "react";
import {PropTypes} from "prop-types";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import userSignupRequest from "./signupAction";
import isUserExists from './isUser';
import addMessage from "../common/flashMessage";
import TextFieldInput from "../common/TextFieldInput";
import validateInput from "./signupValidation";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isValid: false,
      isLoading: false,
      Redirect: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
//Validate user input using validateInput file
  isValid() {
    const email = encodeURIComponent(this.state.email);
    const password = encodeURIComponent(this.state.password);
    const { errors, isValid} = validateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }
    return isValid;
  }
//submit user signup request
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
//axios will take care of valid request in userSignupRequest file
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addMessage({
            type: "success",
            text: "Welcome"
          });
        },
        (err) => this.setState({ errors: err.data, isLoading: false})

      );
    }
    //axios.post("/api/users", {user: this.state});
  }
//check current user
  checkUserExists(e) {
    const { name, value } = e.target;
    if(value) {
      this.props.isUserExists(value).then(res => {
        const errors = {...this.state.errors};
        let invalid = false;
        if(res.data.user) {
          errors[name] = `Invalid ${name}`;
          invalid = true;
        } else {
          errors[name] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  render () {
    const errors = this.state.errors;
    return (
      <div>
        {this.state.Redirect ? <Redirect to="/" /> :
          <form onSubmit={this.onSubmit}>
            <h1> Lets play Galatic Struggle!</h1>

            <TextFieldInput
              field="username"
              value={this.state.username}
              label="Username"
              errors={errors.username}
              onChange={this.onChange}
              onBlur={this.checkUserExists}
            />
            <TextFieldInput
              field="email"
              value={this.state.email}
              label="Email"
              errors={errors.email}
              onChange={this.onChange}
              onBlur={this.checkUserExists}
            />
            <TextFieldInput
              field="password"
              value={this.state.password}
              label="Password"
              errors={errors.password}
              onChange={this.onChange}
              type="password"
            />
            <TextFieldInput
              field="passwordConfirmation"
              value={this.state.passwordConfirmation}
              label="Password Confirmation"
              errors={errors.passwordConfirmation}
              onChange={this.onChange}
              type="password"
            />
            
            <div className="form-group">
              <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
                Sign up
              </button>
            </div>
          </form>
        }
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default connect(null,
  { userSignupRequest, addMessage, isUserExists })(SignupForm);