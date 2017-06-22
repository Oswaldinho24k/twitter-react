import React, {Component} from 'react';
import Background from './background';
import Barra from './barraNumbers';
import Info from './basicInfo';
import Sections from './sections';
import './profile.css';


class Profile extends Component{
  render(){
    return(
      <div>
        <Background imgUrl="https://pbs.twimg.com/profile_images/720062724336541696/Pm1WFn9l_400x400.jpg"/>
        <Barra following={10} followers={5000} tweets={500}/>
        <div className="main">
          <Info className="info"
            twitter="@Oswaldinho24K"
            birth="31/08/1996"
            birthplace="Pachuca Hidalgo"
            activity="SportsMan and Web Developer"/>
          <Sections className="sections"
            bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>

      </div>
    );
  }
}

export default Profile
