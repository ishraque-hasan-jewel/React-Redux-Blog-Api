import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// const Router = ReactRouterDOM.BrowserRouter;
// const Route = ReactRouterDOM.Route;
// const Switch = ReactRouterDOM.Switch;
// const Link = ReactRouterDOM.Link;
//import { Link } from "react-router-dom";
import Home from "./Home";
import Postid from './Postid';
import Comment1 from './Comment1';
import Postid3 from './Postid3';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
        <Route exact path='/' element={<Home/>}/>
          
          <Route
            path="/lorem-ipsum-dolor-sit-amet-consectetur"
            element={<Postid/>}
          />
          <Route path="/lorem-ipsum-dolor-sit" element={ <Comment1/>} />
          <Route exact path='/lorem-ipsum-dolor-sit-jewel' element={<Postid3/>}/>
        </Routes>
      </div>
    </Router>
  );
}



// class Header extends React.Component {
//   render() {
//     //header
//     return <header></header>;
//   }
// }

// // ReactDOM.render(<App />, document.getElementById("blog"));
export default App
