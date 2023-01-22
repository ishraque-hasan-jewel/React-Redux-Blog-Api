

import React from 'react'
import Container from 'react-bootstrap/Container';
import Todos from "./components/Todos";
import './App.css'

import { Link } from "react-router-dom";

function Postid3() {
    return (
      <Container>

      <div className='test1'>
        <h1 id="About">Users</h1>
      <p>API Calling with Jason Place holder</p>
     
      </div >
         <div className='test2'>
         <hr />
      </div>

          
      <Link to="/" class="back">
         Back
       </Link>
       
         <Todos />
       
      </Container>
      );
    }

    export default Postid3;
  