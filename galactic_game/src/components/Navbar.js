import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from "prop-types";
import Auth from "../modules/Auth";
import logo_galatic_struggle from '../assets/logo_galatic_struggle.gif';


const Navbar = ({children}) => (

    <div className="main-container">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img height="50px" className="" alt="" src={logo_galatic_struggle}/>
            </Link>
          </div>
          <div className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cardgallery">Card Gallery</Link></li>
            <li><Link to="/rules">Rules</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/player1">Player1</Link></li>
            <li><Link to="/Player2">player2</Link></li>
          </div>
          {!Auth.isUserAuthenticated()? (
            <div className="nav navbar-nav navbar-right">
              <li><Link to="/logout">Log out</Link></li>
            </div>
           ) : (

          <div className="nav navbar-nav navbar-right">
            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </div>
        )}
        </div>
      </nav>
    </div>

  );
    


// Navbar.propTypes = {
//   children: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//     auth: state.auth
// })

export default Navbar;
