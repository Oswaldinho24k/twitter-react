import React, {Component} from 'react';

class Info extends Component{
  render(){
    return(
      <div className={this.props.className}>
        <h2>{this.props.twitter}</h2>

        <p
          onClick={this.props.lupe}
        >{this.props.birth}</p>
        <p>{this.props.birthplace}</p>
          <p>{this.props.activity}</p>
      </div>
    );
  }
}

export default Info;
