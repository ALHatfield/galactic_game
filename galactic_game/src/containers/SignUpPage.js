import React from 'react';
import  PropTypes  from 'prop-types';
import SignUpForm from '../components/SignUpForm';
//import { Redirect } from "react-router-dom";

class SignUpPage extends React.Component {
  /** Class constructor.*/
   constructor(props, context) {
     super(props, context);

     // set the initial component state
     this.state = {
       errors: {},
       user: {
         email: '',
         name: '',
         password: ''
       }
     };
     this.processForm = this.processForm.bind(this);
     this.changeUser = this.changeUser.bind(this);
   }

   
    /** Process the form, @param {object} event - the Javascript event object */

    processForm(event) {
      // prevent default action. in this case, action is the form submission event
      event.preventDefault();

      //create a string for an HTTP body message
      const name = encodeURIComponent(this.state.user.name);
      const email = encodeURIComponent(this.state.user.email);
      const password = encodeURIComponent(this.state.user.password);
      const formData = `name=${name}&email=${email}&password=${password}`;


      // create an AJAX Request
      const xhr = new XMLHttpRequest();
      xhr.open('post', '/auth/signup');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          //success
          console.log(xhr.response)
          //change the component-container state
          this.setState({ errors: {} });
          //set a message
          localStorage.setItem("successMessage", xhr.response.message);
          //redirect current route

          //<Redirect to="/login">
          this.props.history.push("/login");

          //console.log('The form is valid');
           
        } else {
          //on failure

          const errors = xhr.response.errors? xhr.response.errors : {};
          errors.summary = xhr.response.message;

          this.setState({ errors });
        }
      });
      xhr.send(formData);
    }

    /** Change the user object. @param {object} event - the JavaScript event object */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({ user });
  }



    /** Render the component. */
    
    render() {
            
      return (
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      );
    }
}

SignUpPage.contextTypes = {
  history: PropTypes.object.isrequired
}

export default SignUpPage;