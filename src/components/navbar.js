import React, {Component} from 'react';
import './profile.css';
import FontAwesome from 'react-fontawesome';

class NavBar extends Component{
  render(){
    return(
      <div>
        <header>
          <nav className="nav-left">
            <FontAwesome name='home'/>
          </nav>
          <nav className="nav-center">
            <FontAwesome name='twitter'/>
          </nav>
          <nav className="nav-right">
            <FontAwesome name='user'/>
          </nav>
        </header>
      </div>
    );
  }
}
export default NavBar;
