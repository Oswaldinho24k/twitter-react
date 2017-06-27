import React, {Component} from 'react';
import Background from './background';
import Barra from './barraNumbers';
import Info from './basicInfo';
import Sections from './sections';
import './profile.css';
import firebase from '../firebase';
import toastr from 'toastr';


class Profile extends Component{

  state = {
    img:'',
    twitter:"@HectorBlisS",
    birth:"17/04/1987",
    birthplace:"CDMX",
    activity:"a fucking senior fullstack web developer",
    bio: "soy de la generación que jugó con atari, se conecto a internet con un dialup, uso windows 95, y ahora usa una mac para desarrollar en android. Todo en la misma vida."

  };

  click = () => {
    toastr.success("Exito");
    toastr.warning("chet!");
    toastr.error("Error");
    // alert('Me pusharon!, aiiuda');
    // var provider = new firebase.auth.GoogleAuthProvider();

  //   firebase.auth().signInWithPopup(provider)
  //   .then((result) => {
  //   console.log(result.user);
  //   this.setState({
  //     twitter:result.user.email,
  //     img: result.user.photoURL
  //   });
  // });

  

  }

  componentWillMount(){

  }

  componentDidMount(){
      const lupe = firebase.database().ref('users/'+"-Kn6iva81QlVVFqH5l24");
  lupe.on('value', (snapshot) => {
    console.log(snapshot.val());
    this.setState({
      img:snapshot.val().photoURL
    });
  });
  }

  render(){
    return(
      <div>
        <Background imgUrl={this.state.img}/>
        <Barra following={10} followers={5000} tweets={500}/>
        <div className="main">
          <Info className="info"
            lupe={this.click}
            twitter={this.state.twitter}
            birth={this.state.birth}
            birthplace={this.state.birthplace}
            activity={this.state.activity}/>
          <Sections className="sections"
            bio={this.state.bio}/>
        </div>

      </div>
    );
  }
}

export default Profile
