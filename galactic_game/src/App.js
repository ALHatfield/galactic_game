import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Rules from "./components/Rules";
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
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/game" component={GameBoard}  />
          <Route path="/game-board-player-one" component={GameBoardPlayerOne} />
          <Route path="/game-board-player-two" component={GameBoardPlayerTwo} />
          <Footer />
        </div>
      </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

