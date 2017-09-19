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
// const Greetings = () => (
//       <div className="App">
//       <Navbar />
//         <div className="out-video">
//           <div className="App-header">
//             <h2>Welcome to Galactic Battle!</h2>
//           </div>
//           <video autoPlay={true} loop id="bgvid" width="100%" height="100%">
//             <source src={ bgVideo } type="video/mp4"></source>
//           </video>
//           <div>
//             <CardList />
//           </div>
//         </div>  
//       </div>
//       )

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
          <Route path="/rules" component={Rules} />
          <Route path="/game" component={Game} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

