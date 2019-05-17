import React from 'react';
import './App.css';
import FirstActor from './components/first-actor'
import SecondActor from './components/second-actor'
import CommonMovies from './components/CommonMovie'
import TwoActors from './components/twoActors'
import TwoMovies from "./components/twoMovies";

import Header from './components/Header'
import 'gestalt/dist/gestalt.css'
import {Helmet} from 'react-helmet'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Link,Switch,Route
} from 'react-router-dom';


class App extends React.Component {


  render(){

      return (

          <Router>
              <Helmet>
                  <meta charSet="utf-8" />
                  <title>My Title</title>
                  <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet"/>
              </Helmet>
              <div className="main">
                  <Header/>

                  <Switch>
                      <Route exact path='/' component={TwoActors}/>
                      <Route path='/twoMovies' component={TwoMovies}/>
                  </Switch>
              </div>
          </Router>
      )
  }
}

export default App;
