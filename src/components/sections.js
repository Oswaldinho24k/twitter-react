import React, {Component} from 'react';

class Sections extends Component{
  render(){
    return(
      <div className={this.props.className}>
        <p>{this.props.bio}</p>
      </div>
    );
  }
}

export default Sections;
