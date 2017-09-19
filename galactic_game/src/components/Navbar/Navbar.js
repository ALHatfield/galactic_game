import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { logout } from "../common/authAction";
import {PropTypes} from "prop-types";
import logo_galatic_struggle from '../../assets/logo_galatic_struggle.gif';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }


  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            
            <Link className="navbar-brand" to="/">
              <img height="50px" className="" alt="" src={logo_galatic_struggle}/>
            </Link>
          </div>
          <ul className="nav navbar-nav">
           <li><Link to="/home">Home</Link></li>
            <li><Link to="/cardgallery">Card Gallery</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            <li><a href="/logout" onClick={this.logout}>Logout</a></li>
          </ul>


          {/*{isAuthenticated ? userLinks : guestLinks}*/}
          
        </div>
      </nav>
      );
    }
}

Navbar.propTypes = {
  auth: PropTypes.object,
  logout: PropTypes.func
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout} ) (Navbar);
