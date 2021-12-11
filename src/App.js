import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogContainer from './components/Dialogs/DialogContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {inizializeApp} from "./Redux/appReducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router";
import Preloader from './components/Common/Preloader';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/redux-store';


class App extends React.Component{

  componentDidMount(){
    this.props.inizializeApp();
  }

  render(){
      if(this.props.initialization){
        return (
          <div className = 'app-wrapper'>
              <HeaderContainer/>
              <Nav/>
                <div className = 'app-wrapper-content'>
                  <Route path='/dialogs' render ={()=><DialogContainer /> } />
                  <Route path='/profile/:userId?' render = {()=><ProfileContainer/> } />
                  <Route path = '/news' render = {()=> <News/> }/>
                  <Route path = '/music' component = {Music}/>
                  <Route path = '/settings' component = {Settings}/>
                  <Route path = '/users' render = {()=><UsersContainer/>} />
                  <Route path = '/login' render ={()=><Login/>} />
                </div>
            </div>
        );
      }else{
        return <Preloader/>;
      }
    }   
}


  const mapStateToProps = (state) =>{
    return {
      initialization:state.appReducer.initialization
    }
  };


let AppContainer =  compose(
  withRouter,
  connect(mapStateToProps,{inizializeApp}))(App);

const MainApp = (props) => {
    return (
      <BrowserRouter>
      <Provider store={store} >
        <AppContainer/>
      </Provider>
    </BrowserRouter>
    );
  }

  export default MainApp;



  


