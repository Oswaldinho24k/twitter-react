import React, {Component} from 'react';

class Barra extends Component{
  render(){
    return(
      <div className="barra">
        <ul>
          <li>
            <span>Followers</span>
            <span>{this.props.followers}</span>
          </li>
          <li>
            <span>Following</span>
            <span>{this.props.following}</span>
          </li>
          <li>
            <span>Tweets</span>
            <span>{this.props.tweets}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Barra;
