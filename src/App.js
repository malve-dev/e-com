import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signInPage/signInPage.component';
import {auth} from './firebase/firebase.util';
import React,{Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
  }
}
unsubscribeFromAuth = null;
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route path = '/shop' exact  component = {Shop}/>
        <Route path = '/signin' exact  component = {SignInPage}/>
        <Route path = '/' exact  component = {Homepage}/>
      </Switch>
    </div>
  );
}
}

export default App;
