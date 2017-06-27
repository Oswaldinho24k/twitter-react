import React, {Component} from 'react';
import './profile.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class NavBar extends Component{
  render(){
    return(
      <div>
        <header>
          <nav className="nav-left">
          <Link to="/">
            <FontAwesome name='home'/>
          </Link>

          </nav>
          <nav className="nav-center">
          <Link to="/login">
            <FontAwesome name='twitter'/>
            </Link>
          </nav>
          <nav className="nav-right">
          <Link to="/profile">
            <FontAwesome name='user'/>
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}
export default NavBar;
