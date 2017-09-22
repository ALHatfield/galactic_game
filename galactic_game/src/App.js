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
import GameBoard from "./components/GameBoard";

//Base outlet


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
          <Route path="/game" component={GameBoard}  />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

