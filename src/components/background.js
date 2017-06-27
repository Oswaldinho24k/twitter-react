import React, {Component} from 'react';
import './profile.css';

class Background extends Component{
  render(){
    return(
      <div className="backContainer">
        <div className="back"></div>
        <img alt="imagen" className="img" src={this.props.imgUrl}/>
      </div>
    );
  }
}

export default Background;
