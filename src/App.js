import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import DialogContainer from './components/Dialogs/DialogContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = () =>{
  return (
      <div className = 'app-wrapper'>
        <Header/>
        <Nav/>
          <div className = 'app-wrapper-content'>
            <Route path='/dialogs' render ={()=><DialogContainer /> } />
            <Route path='/profile' render = {()=><Profile /> } />
            <Route path = '/news' render = {()=> <News/> }/>
            <Route path = '/music' component = {Music}/>
            <Route path = '/settings' component = {Settings}/>
            <Route path = '/users' render = {()=><UsersContainer/>} />
          </div>
      </div>
  );
}

export default App;
