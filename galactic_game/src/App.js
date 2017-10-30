import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Auth from "./modules/Auth";
import SignUpPage from "./containers/SignUpPage";
import LoginPage from "./containers/LoginPage";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CardGallery from "./components/CardGallery";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/landingPage";
import GameBoard from "./components/GameBoard";
import GameBoardPlayerOne from "./components/GameBoardPlayerOne";
import GameBoardPlayerTwo from "./components/GameBoardPlayerTwo";

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Base outlet
injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="main-container">

          <Route path="/" render={(mathProps) => (
            <div>
              <Navbar {...mathProps}/>
            </div>)}
          />
          <Route exact path="/" component= { LandingPage } />
          <Route path="/home" component={HomePage} />
          <Route path="/cardgallery" component={CardGallery} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/game" component={GameBoard}  />
          <Route path="/player1" component={GameBoardPlayerOne} />
          <Route path="/player2" component={GameBoardPlayerTwo} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
    );
  }
}

export default App;

