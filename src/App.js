import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Index from '../pages/index';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <div className="App">
      {/* <header>头部</header> */}
        <Switch>
          {
            routes.map(route => { 
              return(
                <Route 
                key = {route.path}
                path = {route.path}
                component = {route.component}/>
              )
            })
          }
          <Redirect exact from = "/" to = {routes[0].path} />
          <Redirect to = '/404'/>
        </Switch>
        {/* <footer>尾部</footer> */}
    </div>
  );
}

export default App;

