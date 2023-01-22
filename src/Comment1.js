

import React from 'react'
import Container from 'react-bootstrap/Container';
import Comment from "./components/Comment";
import './App.css'

import { Link } from "react-router-dom";

function Comment1() {
    return (
      <Container>

     <div className='test1'>
       <h1 id="About">Comment</h1>
      <p>API Calling with Jason Place holder</p>
     
      </div >
         <div className='test2'>
         <hr />
      </div>

          
      <Link to="/" class="back">
         Back
       </Link>
       
         <Comment />
       
      </Container>
      );
    }

    export default Comment1;
  