import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
 import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import ProfilePage from './profilePage';



class Routes extends Component{
	render(){
		return(
			<div>
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/profile" component={ProfilePage} />
		<Route component={HomePage} />
	</Switch>
	</div>
			);
	}
}

export default Routes;