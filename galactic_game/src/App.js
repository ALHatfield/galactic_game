import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import SignupPage from "./components/Signup/SignupPage";
import LoginPage from "./components/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Rules from "./components/Rules";
import CardGallery from "./components/CardGallery";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/landingPage";

//Base outlet
const Greetings = () => (
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <h1> Welcome to Galactic Battle field! </h1>
            </div>
          </div>
      )

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Route path="/" render={(mathProps) => (
            <div>
              <Navbar {...mathProps}/>
            </div>
          )}
          />
          <Route exact path="/" component= { LandingPage } />
          <Route path="/rules" component={Rules} />
          <Route path="/cardgallery" component={CardGallery} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Greetings />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

