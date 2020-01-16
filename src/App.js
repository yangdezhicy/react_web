import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>33</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// // import ReactDOM from 'react-dom';
// // import {createStore} from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import logo from './logo.svg';
// import './App.css';

// const linkStyle = {
//   color: '#000',
//   textDecoration: 'none'
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="container">
//           <Link style={linkStyle} to='/'>Home</Link>|
//           <Link style={linkStyle} to='/article'>Article</Link>|
//           <Link style={linkStyle} to='/about'>About</Link>|
        
//           <Route exact path="/" render={props => (
//             <React.Fragment>
//               <h3>Home</h3>
//               This is Home Page.
//             </React.Fragment>
//           )} />     

//           <Route path="/about" render={
//             props => (
//               <React.Fragment>
//                 <h3>About</h3>
//                 This is about page.
//               </React.Fragment>
//             )
//           }/>

//           <Route path="/article" render={
//             props => (
//               <React.Fragment>
//                 <h3>article</h3>
//                 This is article page.
//               </React.Fragment>
//             )
//           }/>
          
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

