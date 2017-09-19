import React from 'react';
import logo from './logo.svg';
import './App.css';
import bgVideo from './assets/Background_08.mp4';              // Background Video
import CardList from './containers/container_CardList'; // CardList component
import {BrowserRouter, Route} from "react-router-dom";
import Base from "./components/Base";
import SignupPage from "./components/Signup/SignupPage";
import LoginPage from "./components/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Rules from "./components/Rules";
import Game from "./components/Game";
import Footer from "./components/Footer/Footer";

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
          <Route exact path="/" component= {Greetings} />
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
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

