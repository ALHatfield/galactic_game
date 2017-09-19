import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { logout } from "../common/authAction";
import {PropTypes} from "prop-types";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    //this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    // const isAuthenticated = this.props.auth;
    // const userLinks = (
    //     <ul className="nav navbar-nav navbar-right">
    //       <li><a href="/logout" onClick={this.logout}>Logout</a></li>
    //     </ul>
    //   );

    // const guestLinks = (
    //   <ul className="nav navbar-nav navbar-right">
    //       <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
    //       <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    //   </ul>
    //   );

    return (

      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Galatic Struggle</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><Link to="/pag1">Page 1</Link></li>
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
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout} ) (Navbar);
